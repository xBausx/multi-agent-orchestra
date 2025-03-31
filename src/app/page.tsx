"use client";
import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import ChatMessageComponent from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { sendMessage } from "@/lib/api";

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = async (text: string) => {
    const userMessage: ChatMessage = { role: "user", content: text };
    const updatedMessages: ChatMessage[] = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const assistantMessage: ChatMessage = await sendMessage(updatedMessages);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Multi-LLM Chat</h1>

      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <ChatMessageComponent key={idx} message={msg} />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </main>
  );
}
