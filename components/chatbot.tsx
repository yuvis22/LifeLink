"use client";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I'm LifeLink Assistant. Ask me about blood donation, compatibility, or timings." },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // API call to get AI response
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, something went wrong. Please try again." }]);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col z-50">
          <div className="bg-red-600 text-white p-3 rounded-t-2xl text-center font-semibold">
            🩸 LifeLink Assistant
          </div>
          <div className="flex-1 p-3 overflow-y-auto max-h-80 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-gray-800 self-start"
                    : "bg-red-500 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-200">
            <input
              type="text"
              className="flex-1 p-2 outline-none text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 text-red-600 hover:text-red-700"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
