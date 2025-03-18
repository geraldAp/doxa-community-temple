"use client";

import type React from "react";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    status,
  } = useChat({
    api: "/api/chat",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chatbot Trigger Button */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg p-0"
        size="icon"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-in fade-in duration-300">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          />

          {/* Chat Window */}
          <Card className="w-full max-w-md mx-4 shadow-xl relative z-10 flex flex-col animate-in slide-in-from-bottom-10 duration-300">
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-primary text-primary-foreground p-4">
              <h2 className="font-semibold text-lg">Chat with Us</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary/80"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            {/* Chat Messages */}
            <CardContent className="p-4 overflow-y-auto max-h-[60vh] min-h-[300px] flex flex-col space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground my-auto">
                  Send a message to start the conversation
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-lg max-w-[85%] break-words",
                        message.role === "user"
                          ? "bg-slate-300 text-primary-foreground rounded-tr-none"
                          : "bg-muted rounded-tl-none"
                      )}
                    >
                      <div className="prose max-w-none">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce delay-75" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input Field */}
            <CardFooter className="p-4 border-t">
              <form onSubmit={handleFormSubmit} className="flex w-full gap-2">
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-grow"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
