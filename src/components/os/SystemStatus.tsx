"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const SystemStatus = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-surface/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold tracking-wider text-muted">System Status</h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-green-500 tracking-wider">ONLINE</span>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Name</div>
          <div className="font-medium">{portfolioData.name}</div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Role</div>
          <div className="font-medium">{portfolioData.role}</div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Location</div>
          <div className="font-medium">{portfolioData.location}</div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Current Focus</div>
          <div className="font-medium text-accent">Building Better Solutions</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border-4 border-surface-light">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-accent"
              strokeDasharray="175"
              strokeDashoffset="0"
            />
          </svg>
          <span className="text-xs font-bold">100%</span>
        </div>
        <div>
          <div className="font-semibold text-sm mb-1">Ready to Build</div>
          <div className="text-xs text-muted">Small consistent steps lead to extraordinary results.</div>
        </div>
      </div>
    </motion.div>
  );
};
