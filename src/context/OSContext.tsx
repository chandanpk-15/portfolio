"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AppID = "about" | "projects" | "skills" | "achievements" | "education" | "contact" | "settings";

interface WindowState {
  id: AppID;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface OSContextType {
  windows: WindowState[];
  openApp: (id: AppID) => void;
  closeApp: (id: AppID) => void;
  minimizeApp: (id: AppID) => void;
  maximizeApp: (id: AppID) => void;
  focusApp: (id: AppID) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeZIndex, setActiveZIndex] = useState(10);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(t => t === "dark" ? "light" : "dark");
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light");
    }
  };

  const openApp = (id: AppID) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === id);
      if (exists) {
        return prev.map(w =>
          w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: activeZIndex + 1 } : w
        );
      }
      return [...prev, { id, isOpen: true, isMinimized: false, isMaximized: false, zIndex: activeZIndex + 1 }];
    });
    setActiveZIndex(prev => prev + 1);
  };

  const closeApp = (id: AppID) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
  };

  const minimizeApp = (id: AppID) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
  };

  const maximizeApp = (id: AppID) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  const focusApp = (id: AppID) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: activeZIndex + 1 } : w));
    setActiveZIndex(prev => prev + 1);
  };

  return (
    <OSContext.Provider value={{ windows, openApp, closeApp, minimizeApp, maximizeApp, focusApp, theme, toggleTheme }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error("useOS must be used within an OSProvider");
  return context;
};
