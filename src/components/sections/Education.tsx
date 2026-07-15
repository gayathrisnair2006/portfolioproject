"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-rose-500/10 rounded-2xl mb-4 text-rose-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-rose-500/20 to-pink-500/20 p-8 flex flex-col justify-center items-center text-center border-r border-slate-800">
                  <GraduationCap className="w-16 h-16 text-rose-400 mb-4" />
                  <div className="inline-flex items-center gap-2 text-rose-300 font-medium bg-rose-500/10 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4" /> 2023 - 2027
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Artificial Intelligence & Data Science</h3>
                  <h4 className="text-lg text-rose-400 mb-4">Second Year Student</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Currently pursuing a rigorous curriculum focused on Machine Learning algorithms, Data Structures, Database Management Systems, and core Computer Science fundamentals. Active participant in coding clubs and AI-focused hackathons.
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
