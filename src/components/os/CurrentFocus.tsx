"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export const CurrentFocus = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 }}
      className="bg-surface/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold tracking-wider text-muted">Current Focus</h3>
        <span className="text-xs font-bold text-accent tracking-wider animate-pulse flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> IN PROGRESS
        </span>
      </div>

      <div className="mb-4">
        <h4 className="font-bold text-lg">Building Better Solutions</h4>
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="line-through text-muted">AgriWise — Environment</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="line-through text-muted">MealMatrix — Web Application</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Circle size={16} className="text-text" />
          <span className="font-medium">Next Big Idea — ?</span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-xs text-muted">
        <span>Task progress</span>
        <span className="font-medium text-text">66%</span>
      </div>
      <div className="w-full bg-surface-light h-1.5 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "66%" }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-accent h-full rounded-full"
        />
      </div>
    </motion.div>
  );
};
