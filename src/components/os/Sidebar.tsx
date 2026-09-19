"use client";

import React from "react";
import { useOS } from "@/context/OSContext";
import { 
  Home, Folder, Code, Trophy, 
  GraduationCap, Mail, Trash2, User 
} from "lucide-react";
import { motion } from "framer-motion";

const apps = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About.app", icon: User },
  { id: "projects", label: "Projects.app", icon: Folder },
  { id: "skills", label: "Skills.app", icon: Code },
  { id: "achievements", label: "Achievements.app", icon: Trophy },
  { id: "education", label: "Education.app", icon: GraduationCap },
  { id: "contact", label: "Contact.app", icon: Mail },
];

export const Sidebar = () => {
  const { openApp, windows } = useOS();

  return (
    <div className="w-64 h-[calc(100vh-2rem)] mt-8 fixed left-0 top-0 border-r border-border bg-background/50 backdrop-blur-sm p-4 hidden md:flex flex-col z-40">
      <div className="text-xs text-muted mb-4 tracking-widest uppercase font-semibold">
        Applications
      </div>
      
      <div className="flex flex-col gap-2 flex-1">
        {apps.map(app => {
          const isOpen = windows.find(w => w.id === app.id)?.isOpen;
          
          return (
            <button
              key={app.id}
              onClick={() => app.id !== "home" && openApp(app.id as any)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all relative group ${
                isOpen ? 'bg-surface text-accent' : 'text-text hover:bg-surface-light'
              }`}
            >
              <app.icon size={16} className={isOpen ? "text-accent" : "text-muted group-hover:text-text"} />
              <span className="text-sm">{app.label}</span>
              
              {isOpen && (
                <motion.div 
                  layoutId="activeApp"
                  className="absolute left-0 w-1 h-1/2 bg-accent rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-auto">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-text hover:bg-surface-light w-full">
          <Trash2 size={16} className="text-muted" />
          <span className="text-sm">Trash</span>
        </button>
      </div>
    </div>
  );
};
