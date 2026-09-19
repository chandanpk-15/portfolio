"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export const SkillsApp = () => {
  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <Code2 size={24} className="text-accent" />
        <h2 className="text-2xl font-bold tracking-tight">Technology Stack</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <div key={category} className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-sm font-bold text-muted tracking-widest uppercase mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <div 
                  key={skill} 
                  className="bg-surface-light border border-border/50 text-text px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
