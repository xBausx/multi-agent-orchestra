"use client";
import { ChatMessage } from "@/types/chat";

export default function ChatMessageComponent({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`w-full py-2 ${isUser ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block max-w-xl p-3 rounded-xl ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
