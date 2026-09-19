"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOS } from "@/context/OSContext";
import { Home, Folder, Compass, Terminal, Music, FileText, Settings, Trash2, User } from "lucide-react";

const dockItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "browser", icon: Compass, label: "Browser" },
  { id: "terminal", icon: Terminal, label: "Terminal" },
  { id: "music", icon: Music, label: "Music" },
  { id: "notes", icon: FileText, label: "Notes" },
  { id: "settings", icon: Settings, label: "Settings" },
  { id: "trash", icon: Trash2, label: "Trash" },
];

export const Dock = () => {
  const { openApp, windows } = useOS();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-2 flex items-end gap-2 shadow-2xl">
        {dockItems.map((item, index) => {
          const isOpen = windows.find(w => w.id === item.id)?.isOpen;
          
          return (
            <div key={item.id} className="relative flex flex-col items-center group">
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -8, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-10 bg-surface border border-border px-3 py-1 rounded-lg text-xs whitespace-nowrap text-text shadow-lg"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openApp(item.id as any)}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text hover:text-accent hover:border-accent/50 transition-colors relative"
              >
                <item.icon size={20} />
                {isOpen && (
                  <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-text opacity-50" />
                )}
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
