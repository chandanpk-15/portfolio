"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOS } from "@/context/OSContext";
import { User, Folder, Code, Trophy, GraduationCap, Mail } from "lucide-react";

const quickApps = [
  { id: "about", icon: User, name: "About.app", desc: "Know me better" },
  { id: "projects", icon: Folder, name: "Projects.app", desc: "My work" },
  { id: "skills", icon: Code, name: "Skills.app", desc: "Tools I use" },
  { id: "achievements", icon: Trophy, name: "Achievements.app", desc: "Milestones" },
  { id: "education", icon: GraduationCap, name: "Education.app", desc: "My journey" },
  { id: "contact", icon: Mail, name: "Contact.app", desc: "Let's connect" },
];

export const QuickAccess = () => {
  const { openApp } = useOS();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-surface/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg lg:col-span-2 h-full"
    >
      <h3 className="text-sm font-semibold tracking-wider text-muted mb-6">Quick Access</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {quickApps.map((app) => (
          <motion.button
            key={app.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openApp(app.id as any)}
            className="flex flex-col items-start p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-surface-light transition-colors group text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
              <app.icon size={20} className="text-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="font-semibold text-sm mb-1">{app.name}</div>
            <div className="text-xs text-muted">{app.desc}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
