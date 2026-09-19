"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/context/OSContext";
import { portfolioData } from "@/data/portfolio";

export const Terminal = () => {
  const { openApp } = useOS();
  const [history, setHistory] = useState<{ text: string, isCommand: boolean }[]>([
    { text: "A passionate developer exploring technology to solve real-world problems.", isCommand: false }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { text: `chandan@os:~$ ${cmd}`, isCommand: true }];
      
      switch (cmd) {
        case "help":
          newHistory.push({ text: "Available commands: help, about, projects, skills, education, contact, clear", isCommand: false });
          break;
        case "about":
          openApp("about");
          newHistory.push({ text: "Opening About application...", isCommand: false });
          break;
        case "projects":
          newHistory.push({ text: portfolioData.projects.map((p, i) => `0${i+1} ${p.title}`).join('\n'), isCommand: false });
          break;
        case "skills":
          openApp("skills");
          newHistory.push({ text: "Opening Skills application...", isCommand: false });
          break;
        case "education":
          openApp("education");
          newHistory.push({ text: "Opening Education application...", isCommand: false });
          break;
        case "contact":
          openApp("contact");
          newHistory.push({ text: "Opening Contact application...", isCommand: false });
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "whoami":
          newHistory.push({ text: "A passionate developer exploring technology to solve real-world problems.", isCommand: false });
          break;
        default:
          newHistory.push({ text: `Command not found: ${cmd}. Type 'help' for available commands.`, isCommand: false });
      }
      
      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-[#1e1e1e] border border-border rounded-xl shadow-lg flex flex-col h-full overflow-hidden font-mono text-sm"
    >
      <div className="h-8 bg-[#2d2d2d] border-b border-[#3d3d3d] flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400">Terminal</div>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto text-gray-300">
        {history.length === 0 ? null : history[0].isCommand ? null : (
          <div className="mb-2">
            <span className="text-green-400">chandan@os:~$</span> whoami<br/>
          </div>
        )}
        
        {history.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line.isCommand ? (
              <span>{line.text}</span>
            ) : (
              <span className="text-gray-400">{line.text}</span>
            )}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-green-400 mr-2">chandan@os:~$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-gray-300"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};
