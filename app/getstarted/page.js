"use client";

import { IconBolt } from "@tabler/icons-react";
import { SunIcon as Sunburst } from "lucide-react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firebasedb } from "@/lib/firebase"; // Adjust the import path as needed

export default function BookFreeDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateName = (value) => {
    return value.trim().length >= 2;
  };

  const validatePhone = (value) => {
    return value.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setNameError("");
    setEmailError("");
    setPhoneError("");

    // Validate name
    if (!validateName(name)) {
      setNameError("Name must be at least 2 characters long.");
      valid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Validate phone
    if (!validatePhone(phone)) {
      setPhoneError("Phone number must be at least 10 digits.");
      valid = false;
    }

    if (valid) {
      setLoading(true);
      try {
        // Prepare data for Firebase
        const demoData = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          currentWebsite: currentWebsite.trim() || "",
          instagram: instagram.trim() || "",
          facebook: facebook.trim() || "",
          youtube: youtube.trim() || "",
          submittedAt: new Date().toISOString(),
          status: "pending"
        };

        // Add to Firebase
        await addDoc(collection(firebasedb, "demo_requests"), demoData);
        
        console.log("Demo request submitted successfully!");
        setSubmitted(true);
        
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setCurrentWebsite("");
        setInstagram("");
        setFacebook("");
        setYoutube("");
        
        // Show success message
        alert("Thank you! We'll contact you within 24 hours to schedule your free demo.");
        
      } catch (error) {
        console.error("Error submitting demo request:", error);
        alert("Sorry, there was an error submitting your request. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="w-full relative h-full overflow-hidden flex flex-col md:flex-row">
        <div className="w-full h-full z-2 absolute bg-gradient-to-t from-transparent to-black"></div>
        <div className="flex absolute z-2 h-full w-full overflow-hidden backdrop-blur-2xl">
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
          <div className="h-full z-2 w-[4rem] bg-gradient-to-b from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
        </div>
        <div className="w-[15rem] h-[15rem] bg-orange-500 absolute z-1 rounded-full bottom-0"></div>
        <div className="w-[8rem] h-[5rem] bg-white absolute z-1 rounded-full bottom-0"></div>
        <div className="w-[8rem] h-[5rem] bg-white absolute z-1 rounded-full bottom-0"></div>
        <div className="w-[15rem] h-[15rem] bg-orange-500 absolute z-1 left-1/2 -translate-x-1/2 rounded-full bottom-40"></div>
        <div className="w-[8rem] h-[5rem] bg-white absolute z-1 left-1/2 -translate-x-1/2 rounded-full bottom-40"></div>
        <div className="w-[8rem] h-[5rem] bg-white absolute z-1 left-1/2 -translate-x-1/2 rounded-full bottom-40"></div>

        <div className="bg-black text-white p-8 md:p-12 md:w-1/2 relative rounded-bl-3xl overflow-hidden">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight z-10 tracking-tight relative">
            AI-Driven Websites for Car Dealerships
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-md leading-relaxed">
            Get your FREE demo website with 1 month of hosting included. 
            Transform your dealership with our cutting-edge AI technology.
          </p>
        </div>

        <div className="p-8 bg-white md:p-12 md:w-1/2 flex flex-col bg-secondary z-99 text-secondary-foreground">
          <div className="flex mb-4">
            <div className="text-orange-500 ">
              <IconBolt className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-medium mb-2 tracking-tight">
              Book Your Free Demo
            </h2>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name Field - Required */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                  nameError ? "border-red-500" : "border-gray-300"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!nameError}
                aria-describedby="name-error"
                required
              />
              {nameError && (
                <p id="name-error" className="text-red-500 text-xs mt-1">
                  {nameError}
                </p>
              )}
            </div>

            {/* Email Field - Required */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@dealership.com"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!emailError}
                aria-describedby="email-error"
                required
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {emailError}
                </p>
              )}
            </div>

            {/* Phone Field - Required */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-2 font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                  phoneError ? "border-red-500" : "border-gray-300"
                }`}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                aria-invalid={!!phoneError}
                aria-describedby="phone-error"
                required
              />
              {phoneError && (
                <p id="phone-error" className="text-red-500 text-xs mt-1">
                  {phoneError}
                </p>
              )}
            </div>

            {/* Current Website - Optional */}
            <div>
              <label htmlFor="currentWebsite" className="block text-sm mb-2 font-medium">
                Current Website (Optional)
              </label>
              <input
                type="url"
                id="currentWebsite"
                placeholder="https://yourdealership.com"
                className="text-sm w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white text-black"
                value={currentWebsite}
                onChange={(e) => setCurrentWebsite(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Share your current website for better customization
              </p>
            </div>

            {/* Social Media Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium mb-2">
                Social Media Profiles (Optional)
              </label>
              
              {/* Instagram */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IG</span>
                </div>
                <input
                  type="url"
                  id="instagram"
                  placeholder="Instagram Profile URL"
                  className="text-sm flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white text-black"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FB</span>
                </div>
                <input
                  type="url"
                  id="facebook"
                  placeholder="Facebook Page URL"
                  className="text-sm flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white text-black"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Booking Demo...
                </>
              ) : (
                "Book Your Free Demo"
              )}
            </button>

            <div className="text-center text-gray-600 text-sm mt-4">
              <p className="text-xs opacity-75">
                Get your FREE AI-driven dealership website demo with 1 month of hosting included
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}