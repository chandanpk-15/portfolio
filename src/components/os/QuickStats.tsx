"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const Counter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return <span>{prefix}{count}{suffix}</span>;
};

export const QuickStats = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-surface/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg flex flex-col h-full"
    >
      <h3 className="text-sm font-semibold tracking-wider text-muted mb-6">Quick Stats</h3>
      
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            <Counter end={2} suffix="+" />
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-wider">Projects Completed</div>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            <Counter end={2} />
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-wider">Hackathons</div>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            9.21
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-wider">CGPA</div>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            <Counter end={100} suffix="%" />
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-wider">Determination</div>
        </div>
      </div>
    </motion.div>
  );
};
