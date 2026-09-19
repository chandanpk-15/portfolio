"use client";

import React, { useEffect } from "react";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { Dock } from "./Dock";
import { OSProvider } from "@/context/OSContext";
import { WindowManager } from "./WindowManager";
import { SystemStatus } from "./SystemStatus";
import { QuickStats } from "./QuickStats";
import { Terminal } from "./Terminal";
import { QuickAccess } from "./QuickAccess";
import { CurrentFocus } from "./CurrentFocus";
import { motion } from "framer-motion";

export const Desktop = () => {
  return (
    <OSProvider>
      <div className="w-full h-screen overflow-hidden bg-background relative selection:bg-accent/30 selection:text-accent-light flex flex-col font-sans">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <TopBar />
        
        <div className="flex-1 flex mt-8 relative z-10 w-full h-[calc(100vh-2rem)]">
          <Sidebar />
          
          {/* Main Desktop Area */}
          <div className="flex-1 md:ml-64 relative p-4 md:p-8 overflow-y-auto pb-32">
            
            {/* Welcome Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                GOOD MORNING, <span className="text-accent">CHANDAN.</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-text mb-4">
                I build technology that solves real-world problems.
              </h2>
              <p className="text-muted md:text-lg max-w-2xl mb-8 leading-relaxed">
                A Computer Science student passionate about creating impactful solutions, exploring new technologies, and building a better tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-accent hover:bg-accent-light text-background px-6 py-2.5 rounded-lg font-medium transition-colors">
                  Explore Apps →
                </button>
                <button className="bg-surface border border-border hover:border-accent/50 text-text px-6 py-2.5 rounded-lg font-medium transition-colors">
                  About Me
                </button>
              </div>
            </motion.div>

            {/* Desktop Grid Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl pb-20">
              <SystemStatus />
              <QuickStats />
              <Terminal />
              <QuickAccess />
              <CurrentFocus />
            </div>

            <WindowManager />
          </div>
        </div>

        <Dock />
      </div>
    </OSProvider>
  );
};
