"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 w-fit">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-slate-300">Aspiring AI Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Gayathri S Nair</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
              Second-Year B.Tech <br className="hidden md:block" />
              <span className="text-slate-300">AI & Data Science Student</span>
            </h2>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              A passionate and enthusiastic student eager to learn, innovate, and build intelligent solutions through Artificial Intelligence, Machine Learning, and Data Science.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="glow" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 glass" asChild>
                <a href="/GAYATHRI%20S%20NAIR_InternshalaResume-1.pdf" download="GAYATHRI_S_NAIR_Resume.pdf">
                  Download Resume <Download className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Placeholder */}
              <div className="absolute inset-8 rounded-full bg-slate-900 border border-slate-700 overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] flex items-center justify-center">
                <img src="/profile.jpg" alt="Gayathri S Nair" className="w-full h-full object-cover" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass-card p-3 rounded-xl flex items-center gap-3"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Python</div>
                  <div className="text-sm font-semibold">10K+ Lines</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 glass-card p-3 rounded-xl flex items-center gap-3"
              >
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Model</div>
                  <div className="text-sm font-semibold">Training...</div>
                </div>
              </motion.div>
              
              {/* Decorative nodes */}
              <div className="absolute top-0 right-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
