"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { User } from "lucide-react";

export const AboutApp = () => {
  return (
    <div className="p-8 h-full flex flex-col md:flex-row gap-8 overflow-y-auto">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            More Than a Student.
          </h1>
          <h2 className="text-3xl font-semibold text-accent tracking-tight">
            I'm a Problem Solver.
          </h2>
        </div>
        
        <p className="text-lg text-text/80 leading-relaxed max-w-2xl">
          {portfolioData.about.description}
        </p>
      </div>
      
      <div className="w-full md:w-80 bg-surface border border-border rounded-xl p-6 h-fit shrink-0">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <div className="w-16 h-16 rounded-full bg-surface-light flex items-center justify-center">
            <User size={32} className="text-muted" />
          </div>
          <div>
            <div className="font-bold text-xl">{portfolioData.name}</div>
            <div className="text-sm text-accent">{portfolioData.role}</div>
          </div>
        </div>
        
        <div className="space-y-4">
          {Object.entries(portfolioData.about.systemInfo).map(([key, value]) => (
            <div key={key}>
              <div className="text-xs text-muted font-bold tracking-widest uppercase mb-1">{key}</div>
              <div className="text-sm font-medium">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
