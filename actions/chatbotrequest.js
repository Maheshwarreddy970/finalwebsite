'use server';


import { ChatGroq } from "@langchain/groq";
// Define the data structure



// Track whether the welcome message has been sent


export async function AiChatBotCall(messages, data) {
  // Convert dealership data to a string
  const dataString = JSON.stringify(data, null, 2);

  console.log('dataString:', dataString);

  const chatHistory = messages.map(msg => `${msg.isBot ? "Bot" : "User"}: ${msg.text}`).join("\n");

  // Dynamic responses for short greetings
  const greetingResponses = [
    `Hi there! 🚗😊 Welcome to ${data.name}! What kind of ride are you looking for today?`,
    `Hello! 🚘 Great to see you here at ${data.name}. Hunting for something sporty or family-friendly?`,
    `Hey! 🚗 Welcome! Excited to help you find your next car—what’s on your wishlist?`,
  ];

  const randomGreeting = greetingResponses[Math.floor(Math.random() * greetingResponses.length)];

  // Construct the prompt for the dealership chatbot
  const prompt = `
    You are a friendly and professional representative for ${data.name}, a trusted car dealership offering a wide range of vehicles from SUVs and sedans to luxury and electric cars. Your goal is to engage customers, highlight our inventory, promotions, and financing options, and gather their contact details to assist them better. Use a warm, human-like tone with emojis 🚗😊👍 to make the conversation approachable.

    **Welcome Message Note:**  
    - The system already sent this welcome: "Hey there! 👋😊 Glad to have you here at ${data.name}! How’s your day going? I’d love to help you find your next ride—just let me know what you need! Oh, and if you’re cool with it, could you share your phone number or email? Makes it easier to send you deals! 🚗"  
    - Do **not** send this or similar again. Continue the conversation naturally.

    **Special Handling for "Hi" or Short Greetings:**  
    - If the latest user message is a short greeting like "hi" or "hello," respond with a dynamic greeting like "${randomGreeting}".
    - If contact info hasn’t been given, ask casually in different ways each time:
      1. "By the way, could you share your phone or email so I can send you our best offers? 🚗"
      2. "Mind dropping your email or phone number? I’ll send you some great deals! 🙌"
      3. "Oh, quick one—got a number or email so I can share the latest arrivals with you? 😊"
    - If they provide contact info, acknowledge it politely (e.g., "Awesome, thanks for sharing your email! 🙌 I’ve noted it.") and don’t ask again unless clarification is needed.

    **Chat History:**  
    - Use the chat history for context. Only reply to the latest user message. Avoid repeating past questions.

    **Company Data:**  
    - Use this data to guide the conversation: ${dataString}
    - Progress naturally by asking about cars in "inventory.cars" or "offers.promotions", one at a time, in order.
    - Weave in vehicle details when relevant (e.g., "Our 2024 EcoDrive SUV gets 35 mpg and comes in 5 colors—want to hear more? 🚗").

    **Rules:**  
    - Use the "title" fields from "inventory.cars" or "offers.promotions" as topics to discuss, marking them as "(complete)" once covered.
    - Stick to actual data—don’t invent cars or offers.
    - Keep a professional but friendly tone.
    - Use emojis thoughtfully to make it engaging.
    - Don’t repeat questions unless clarification is needed.

    **Current Chat History:** 
    "${chatHistory}"

    Respond to the latest user message now. If it’s a short greeting after the welcome, use "${randomGreeting}" and ask for contact info casually if not already provided.
  `;

  const aiMsg = await llm.invoke([
    { role: 'assistant', content: prompt },
    {
      role: "user",
      content:
        messages.length > 0 && !messages[messages.length - 1].isBot
          ? messages[messages.length - 1].text
          : "",
    },
  ]);

  return aiMsg.content;
}


const llm = new ChatGroq({
    apiKey: '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',
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    temperature: 0.7, // Adjusted for more human-like variability
    maxRetries: 2,
});