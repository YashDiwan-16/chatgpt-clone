"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ChatMessage = {
  type: "user" | "ai";
  content: string;
};

const ChatInterface = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const sendMessage = () => {
    if (input.trim()) {
      setChatHistory([...chatHistory, { type: "user", content: input }]);
      // Here you would typically call your AI service
      setChatHistory((prev) => [
        ...prev,
        { type: "ai", content: "AI response..." },
      ]);
      setInput("");
    }
  };

  const deleteChat = (index: number) => {
    setChatHistory(chatHistory.filter((_, i) => i !== index));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const startNewConversation = () => {
    setChatHistory([]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex h-screen ${theme} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-300`}
    >
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-80" : "w-0"
        } transition-all duration-300 overflow-hidden relative bg-white dark:bg-gray-800 shadow-lg`}
      >
        <div className="p-6 flex flex-col h-full">
          <Button
            onClick={startNewConversation}
            className="mb-6 bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 flex items-center justify-center"
          >
            <span className="mr-2">⚡</span> New Chat
          </Button>
          <ScrollArea className="flex-grow">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 px-4 mb-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <span className="truncate flex-grow">
                  {chat.content.substring(0, 30)}...
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteChat(index)}
                        className="ml-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
                      >
                        🗑️
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete conversation</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between transition-colors duration-300">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isSidebarOpen ? "◀" : "▶"}
            </Button>
            <h1 className="text-2xl font-bold flex items-center">
              <span className="mr-2">💬</span>
              ChatBlock
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {theme === "light" ? "🌙" : "☀️"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {theme === "light" ? "dark" : "light"} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    ✨
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI Features (Coming Soon)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <ScrollArea className="flex-1 p-6">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-4 ${
                chat.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-[70%] ${
                  chat.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                } shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {chat.content}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <Button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
            >
              Send 📤
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
