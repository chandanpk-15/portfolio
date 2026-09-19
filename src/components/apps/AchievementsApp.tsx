"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AchievementsApp = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <Trophy size={24} className="text-accent" />
        <h2 className="text-2xl font-bold tracking-tight">Milestone Dashboard</h2>
      </div>
      
      <div className="space-y-4">
        {portfolioData.achievements.map((achievement) => (
          <div key={achievement.id} className="bg-surface border border-border rounded-xl overflow-hidden">
            <button 
              onClick={() => setExpandedId(expandedId === achievement.id ? null : achievement.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-surface-light transition-colors text-left"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                <div className="text-sm text-accent font-medium">{achievement.role}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted hidden md:inline-block">{achievement.date}</span>
                {expandedId === achievement.id ? <ChevronUp size={20} className="text-muted" /> : <ChevronDown size={20} className="text-muted" />}
              </div>
            </button>
            
            <AnimatePresence>
              {expandedId === achievement.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 pt-2 border-t border-border/50 bg-surface-light/50"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Type</div>
                      <div className="font-medium">{achievement.type}</div>
                    </div>
                    {achievement.date && (
                      <div className="md:hidden">
                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Date</div>
                        <div className="font-medium">{achievement.date}</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
