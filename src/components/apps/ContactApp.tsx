"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, MapPin, Link as LinkIcon } from "lucide-react";

export const ContactApp = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-6 md:p-8 flex-1 overflow-y-auto">
        <div className="mb-8 pb-4 border-b border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Let's Connect</h2>
          <p className="text-muted text-lg">Let's build something impactful together.</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Mail size={20} className="text-muted group-hover:text-accent" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Email</div>
                <div className="font-medium">{portfolioData.email}</div>
              </div>
            </a>
            
            <a href={portfolioData.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <LinkIcon size={20} className="text-muted group-hover:text-accent" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">LinkedIn</div>
                <div className="font-medium">Connect on LinkedIn</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface">
              <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center">
                <MapPin size={20} className="text-muted" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Location</div>
                <div className="font-medium">{portfolioData.location}</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>
              
              {status === "success" ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg p-4 text-center font-medium text-sm">
                  Message prepared successfully.
                </div>
              ) : (
                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full bg-accent hover:bg-accent-light text-background font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                >
                  {status === "sending" ? "PREPARING..." : (
                    <>SEND MESSAGE <Send size={16} /></>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
