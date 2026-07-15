"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-2xl mb-4 text-teal-400">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-slate-700/50 ml-3 md:ml-0 md:border-l-0">
            {/* Timeline Item */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="hidden md:flex flex-col items-end pt-1 col-span-1">
                  <span className="text-slate-400 font-medium">Present</span>
                  <span className="text-sm text-slate-500">Started 2024</span>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-[-5px] top-1.5 md:left-auto md:right-auto md:relative md:col-span-1 md:flex md:justify-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)] ring-4 ring-slate-900 md:mt-2" />
                  <div className="hidden md:block absolute top-4 bottom-[-100px] w-px bg-slate-700/50" />
                </div>
                
                <div className="md:col-span-3 glass-card p-6 rounded-2xl">
                  <div className="md:hidden text-sm text-teal-400 font-medium mb-2">2024 - Present</div>
                  <h3 className="text-xl font-bold text-white">Intern</h3>
                  <h4 className="text-lg text-indigo-400 mb-4">BSERC Organization</h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                    Gained practical experience in software development and data analysis. Collaborated with a team of developers to build and optimize internal tools, improving overall efficiency. 
                  </p>
                  <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                    <li>Developed full-stack features using modern web technologies.</li>
                    <li>Participated in daily stand-ups and agile development cycles.</li>
                    <li>Assisted in data preprocessing and model evaluation tasks.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
