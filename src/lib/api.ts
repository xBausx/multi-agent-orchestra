import { ChatMessage } from "@/types/chat";

export async function sendMessage(messages: ChatMessage[]): Promise<ChatMessage> {
  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await response.json();
  return { role: "assistant", content: data.response };
}
