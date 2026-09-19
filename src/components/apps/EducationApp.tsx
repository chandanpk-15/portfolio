"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const EducationApp = () => {
  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <GraduationCap size={24} className="text-accent" />
        <h2 className="text-2xl font-bold tracking-tight">Education Journey</h2>
      </div>
      
      <div className="relative pl-6 md:pl-8 border-l border-border space-y-12 pb-8">
        {portfolioData.education.map((edu, idx) => (
          <div key={edu.id} className="relative">
            <div className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-accent"></div>
            
            <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {edu.year}
                </span>
              </div>
              
              <div className="text-muted font-medium mb-4">{edu.institution}</div>
              
              <div className="inline-block bg-surface-light border border-border px-4 py-2 rounded-lg text-sm font-bold">
                {edu.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
