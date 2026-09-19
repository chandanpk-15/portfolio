"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useOS } from "@/context/OSContext";

interface WindowProps {
  id: "about" | "projects" | "skills" | "achievements" | "education" | "contact" | "settings";
  title: string;
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
}

export const Window: React.FC<WindowProps> = ({ id, title, children, defaultWidth = 800, defaultHeight = 600 }) => {
  const { windows, closeApp, minimizeApp, maximizeApp, focusApp } = useOS();
  
  const windowState = windows.find(w => w.id === id);
  if (!windowState || !windowState.isOpen || windowState.isMinimized) return null;

  const isMaximized = windowState.isMaximized;

  return (
    <AnimatePresence>
      <motion.div
        drag={!isMaximized}
        dragMomentum={false}
        dragElastic={0}
        onMouseDown={() => focusApp(id)}
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0,
          width: isMaximized ? "100%" : defaultWidth,
          height: isMaximized ? "100%" : defaultHeight,
          top: isMaximized ? 0 : "auto",
          left: isMaximized ? 0 : "auto",
        }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: windowState.zIndex }}
        className={`fixed bg-surface/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col overflow-hidden ${isMaximized ? 'rounded-none' : 'rounded-xl max-w-[100vw] max-h-[90vh]'}`}
        // If not maximized, center it initially by not setting top/left and letting it just be positioned.
        // Actually, we need to center it if top/left isn't set.
      >
        {/* Window Header */}
        <div className="h-10 bg-surface-light border-b border-border flex items-center justify-between px-4 cursor-grab active:cursor-grabbing">
          <div className="flex gap-2 items-center">
            <button onClick={() => closeApp(id)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group">
              <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
            </button>
            <button onClick={() => minimizeApp(id)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group">
              <Minus size={8} className="opacity-0 group-hover:opacity-100 text-yellow-900" />
            </button>
            <button onClick={() => maximizeApp(id)} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group">
              <Square size={8} className="opacity-0 group-hover:opacity-100 text-green-900" />
            </button>
          </div>
          <div className="text-muted text-xs font-medium tracking-wide">
            {title}
          </div>
          <div className="w-16"></div> {/* Spacer for symmetry */}
        </div>
        
        {/* Window Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-background/50">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
