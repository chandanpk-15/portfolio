"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Folder, ExternalLink } from "lucide-react";

export const ProjectsApp = () => {
  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <Folder size={24} className="text-accent" />
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      
      <div className="space-y-6">
        {portfolioData.projects.map((project, idx) => (
          <div key={project.id} className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold text-muted tracking-widest uppercase mb-2">PROJECT 0{idx + 1}</div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {project.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1.5 rounded-full border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {project.status}
              </div>
            </div>
            
            <p className="text-text/80 leading-relaxed max-w-3xl mb-8 md:text-lg">
              {project.description}
            </p>
            
            <div>
              <div className="text-xs font-bold text-muted tracking-widest uppercase mb-3">Technologies & Tags</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-surface-light border border-border text-text/90 text-sm px-3 py-1.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
