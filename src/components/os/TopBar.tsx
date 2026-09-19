"use client";

import React, { useState, useEffect } from "react";
import { Search, Wifi, Volume2, BatteryCharging, Download, Sun, Moon } from "lucide-react";
import { useOS } from "@/context/OSContext";

export const TopBar = () => {
  const { theme, toggleTheme } = useOS();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      setTime(now.toLocaleDateString('en-US', options).toUpperCase().replace(/,/g, ''));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 w-full bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 text-xs font-medium text-text fixed top-0 z-50">
      <div className="flex items-center gap-4">
        <span className="font-bold tracking-widest text-accent">CHANDAN OS</span>
      </div>
      
      <div className="hidden md:flex items-center gap-2 text-muted tracking-wider">
        BUILD / LEARN / EXPLORE / GROW
      </div>

      <div className="flex items-center gap-4">
        <button className="hover:text-accent transition-colors flex items-center gap-1">
          <Search size={14} />
        </button>
        
        <a 
          href="/resume.pdf" 
          download
          className="hover:text-accent transition-colors flex items-center gap-1"
          title="Download Resume"
        >
          <Download size={14} />
        </a>

        <button onClick={toggleTheme} className="hover:text-accent transition-colors flex items-center gap-1 ml-2 mr-2" title="Toggle Theme">
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        <div className="flex items-center gap-3 text-muted">
          <Wifi size={14} />
          <Volume2 size={14} />
          <BatteryCharging size={14} />
        </div>

        <div className="text-muted w-48 text-right">
          {time || "LOADING..."}
        </div>
      </div>
    </div>
  );
};
