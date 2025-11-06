"use client";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  MessageCircle,
  X,
  Bot,
  User,
  LoaderCircle,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const quickActions = [
  "Who can donate to O+?",
  "How often can I donate?",
  "What are the requirements?",
  "What are the benefits?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm LifeLink Assistant. I can help you with blood donation information, compatibility questions, and scheduling. How can I assist you today?",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend) return;

    const newMessage = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // API call to get AI response
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: textToSend }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again or contact our support team.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    handleSend(action);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-5 right-5 bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-full shadow-lg transition-all z-50 flex items-center justify-center",
          open && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            1
          </span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-5 right-5 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">LifeLink Assistant</h3>
                <p className="text-xs text-rose-100">We're here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2",
                  msg.sender === "user" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                    msg.sender === "bot"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-rose-600 text-white"
                  )}
                >
                  {msg.sender === "bot" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                    msg.sender === "bot"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                      : "bg-rose-600 text-white shadow-sm"
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-start gap-3 animate-in fade-in">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick actions (only show on first message) */}
            {messages.length === 1 && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
                <p className="text-xs text-gray-500 px-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="cursor-pointer hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700 transition-colors text-xs px-3 py-1"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="bg-rose-600 hover:bg-rose-700 text-white px-4"
                size="icon"
              >
                {isLoading ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}
