"use client";

import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { doc, setDoc, onSnapshot, getDoc, increment } from "firebase/firestore";
import { firebasedb } from "@/lib/firebase";
import { AiChatBotCall } from "@/actions/chatbotrequest";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { FamilyButton } from "../ui/family-button";
import { useClientStore } from "@/store/useClientStore";
import Image from "next/image";

// --- Referral Source Helper ---
const getReferralSource = (referrer) => {
  if (!referrer) return "direct";
  const referrerUrl = new URL(referrer).hostname.toLowerCase();
  const referralMap = {
    "google.com": "Google",
    "google.com.hk": "Google",
    "lnkd.in": "LinkedIn",
    "linkedin.com": "LinkedIn",
    "t.co": "Twitter",
    "twitter.com": "Twitter",
    "facebook.com": "Facebook",
    "instagram.com": "Instagram",
    "whatsapp.com": "WhatsApp",
  };

  for (const [domain, source] of Object.entries(referralMap)) {
    if (referrerUrl.includes(domain)) return source;
  }

  return "direct";
};

const extractContactInfo = (text) => {
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  const phoneMatch = text.match(phoneRegex);
  const emailMatch = text.match(emailRegex);

  return {
    phone: phoneMatch ? phoneMatch[0].replace(/[-.\s]/g, "") : undefined,
    email: emailMatch ? emailMatch[0] : undefined,
  };
};

const getDeviceInfo = (userAgent) => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(userAgent);
  const isTablet = /Tablet|iPad/.test(userAgent);
  const browserMatch = userAgent.match(/(Chrome|Safari|Firefox|Edge|Opera|MSIE|Trident)/i);
  const osMatch = userAgent.match(/(Windows|Mac OS|iOS|Android|Linux)/i);

  return {
    userAgent,
    deviceType: isMobile ? (isTablet ? "Tablet" : "Mobile") : "Desktop",
    browser: browserMatch ? browserMatch[0] : "Unknown",
    os: osMatch ? osMatch[0] : "Unknown",
  };
};

export function FamilyButtonDemo() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);
  const prevMessagesLength = useRef(0);
  const clientInfo = useClientStore((state) => state.clientInfo);

  useEffect(() => {
    setIsClient(true);
    const existingId = localStorage.getItem("chat-user-id");
    if (existingId) {
      setUserId(existingId);
    } else {
      const newId = "user-" + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("chat-user-id", newId);
      setUserId(newId);
    }

    audioRef.current = new Audio("/new-message-31-183617.mp3");
  }, []);

  useEffect(() => {
    if (messages.length > prevMessagesLength.current && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio playback failed:", err);
      });
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!userId || !isClient) return;

    const userDocRef = doc(firebasedb, "users", userId);
    const welcomeSentKey = `welcome-sent-${userId}`;
    const welcomeMessage = {
      text: `Hey there! 👋😊 Welcome to ${clientInfo?.name}! How’s your day going? I’d love to help you find your perfect ride—just let me know what you’re looking for. 🚗 Oh, and if you’re cool with it, could you share your phone number or email? That way I can send you the best offers and updates! 😊`,
      isBot: true,
      createdAt: Date.now(),
    };

    const unsubscribe = onSnapshot(userDocRef, async (docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const existingMessages = userData.messages || [];
        setMessages(existingMessages.sort((a, b) => a.createdAt - b.createdAt));
      }
      setIsLoading(false);
    });

    const initializeUser = async () => {
      const userDoc = await getDoc(userDocRef);
      const hasSentWelcome = localStorage.getItem(welcomeSentKey);
      const referralSource = getReferralSource(document.referrer);

      const deviceInfo = getDeviceInfo(navigator.userAgent);
      let location = {};
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        location = { city: data.city, region: data.region, country: data.country };
      } catch (err) {
        console.error("Location fetch error:", err);
      }

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          messages: [welcomeMessage],
          summary: "",
          referralSource,
          visitCount: 1,
          lastVisit: Date.now(),
          deviceInfo,
          location,
          totalVisits: 1,
        });
        setMessages([welcomeMessage]);
        localStorage.setItem(welcomeSentKey, "true");
      } else if (!hasSentWelcome && (!userDoc.data()?.messages || userDoc.data()?.messages.length === 0)) {
        await saveChatMessage(welcomeMessage.text, true);
        localStorage.setItem(welcomeSentKey, "true");
      } else {
        await setDoc(
          userDocRef,
          {
            visitCount: increment(1),
            lastVisit: Date.now(),
            referralSource,
            deviceInfo,
            location,
            totalVisits: increment(1),
          },
          { merge: true }
        );
      }
    };

    initializeUser();
    return () => unsubscribe();
  }, [userId, isClient]);

  const saveChatMessage = async (text, isBot) => {
    if (!userId) return;

    try {
      const userDocRef = doc(firebasedb, "users", userId);
      const userDoc = await getDoc(userDocRef);
      const referralSource = getReferralSource(document.referrer);

      const userData = userDoc.exists()
        ? userDoc.data()
        : {
          messages: [],
          summary: "",
          referralSource,
          visitCount: 0,
          lastVisit: Date.now(),
          deviceInfo: getDeviceInfo(navigator.userAgent),
          totalVisits: 0,
        };

      const newMessage = {
        text,
        isBot,
        createdAt: Date.now(),
      };

      userData.messages = [...(userData.messages || []), newMessage];
      userData.summary = isBot
        ? `${userData.summary} Bot responded.`
        : `${userData.summary} User said: "${text}".`;

      if (!isBot && userData.contactInfo === undefined) {
        const { phone, email } = extractContactInfo(text);
        if (phone || email) {
          const contact = {};
          if (phone) contact.phone = phone;
          if (email) contact.email = email;
          userData.contactInfo = { ...userData.contactInfo, ...contact };
        }
      }

      await setDoc(userDocRef, userData, { merge: true });
      console.log("Saved:", text);
    } catch (err) {
      console.error("Save message error:", err);
    }
  };

  const getBotResponse = async (text) => {
    try {
      const updatedMessages = [...messages, { text, isBot: false, createdAt: Date.now() }];
      const aiMsg = await AiChatBotCall(updatedMessages, clientInfo);
      return aiMsg;
    } catch (err) {
      console.error("Bot response error:", err);
      return "Sorry, I encountered an error. Please try again.";
    }
  };


  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || !userId || !isClient) return;

    try {
      await saveChatMessage(message, false);
      setMessage("");
      setIsTyping(true);

      const { phone, email } = extractContactInfo(message);
      let botReply = "";
      if (phone && email) {
        botReply = "Awesome, thanks for sharing your phone and email! 🙌 I’ve got them noted. How can I assist you further today?";
      } else if (phone) {
        botReply = "Great, thanks for the phone number! 🙌 I’ve noted it. How can I help you next?";
      } else if (email) {
        botReply = "Thanks for sharing your email! 🙌 I’ve got it down. What’s next on your mind?";
      } else {
        botReply = await getBotResponse(message);
      }

      await saveChatMessage(botReply, true);
    } catch (err) {
      console.error("Send error:", err);
      await saveChatMessage("Sorry, I encountered an error. Please try again.", true);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isClient || isLoading) return <div>Loading...</div>;

  return (
    <div className="z-[50]">
      <div className="fixed bottom-4 right-4 z-[50]">
        <FamilyButton>
          <div className="h-[10%]  w-full flex justify-center items-center gap-2 py-3 shadow-sm border-b ">
            <Image
              width={130}
              height={130}
              src={clientInfo?.logo}
              className=" h-full w-[25%]"
              alt="svg icon"
            />
          </div>

          <div className="h-[80%] space-y-4 w-full overflow-y-auto px-3">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                Start a conversation...
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    `flex ${msg.isBot ? "justify-start" : "justify-end"}`,
                    i === 0 && "mt-20"
                  )}
                >
                  <div
                    className={`max-w-[80%] shadow text-sm md:text-base px-4 py-1.5 ${msg.isBot
                      ? "bg-gray-100 text-gray-800 rounded-r-3xl rounded-tl-3xl"
                      : "bg-black text-white rounded-s-3xl rounded-tr-3xl"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_0.8s_infinite]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_0.8s_infinite_0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_0.8s_infinite_0.4s]"></span>
                </div>
              </div>
            )}

            <div className="h-20" ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="absolute bottom-14 z-[999] w-full px-4">
            <div className="flex gap-4">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="h-10 text-black bg-white shadow border"
              />
              <button type="submit" className="p-2 shadow border bg-black text-white rounded-lg">
                <Send size={20} />
              </button>
            </div>
          </form>
        </FamilyButton>
      </div>
    </div>
  );
}
