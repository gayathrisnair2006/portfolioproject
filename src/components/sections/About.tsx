"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, GraduationCap, Code2 } from "lucide-react";

const stats = [
  {
    label: "Education",
    value: "B.Tech AI & DS",
    description: "Second Year Student",
    icon: GraduationCap,
  },
  {
    label: "Experience",
    value: "Internship",
    description: "BSERC Organization",
    icon: Briefcase,
  },
  {
    label: "Projects",
    value: "10+",
    description: "AI & Web Apps",
    icon: Code2,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl mb-4 text-indigo-400">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert lg:prose-lg">
              <p className="text-slate-300 leading-relaxed">
                Hello! I am <strong className="text-white">Gayathri S Nair</strong>, a highly motivated Second-Year B.Tech student specializing in Artificial Intelligence and Data Science. I am deeply passionate about leveraging technology to solve complex problems and build innovative, intelligent solutions.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                My journey in tech involves exploring the depths of Machine Learning, Data Analytics, and modern software development. During my internship at <strong className="text-indigo-400">BSERC Organization</strong>, I gained invaluable practical experience, honed my technical skills, and learned the importance of effective teamwork in professional environments.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Whether it's building predictive models, crafting responsive web applications, or analyzing data to extract meaningful insights, I approach every project with enthusiasm and a continuous desire to learn.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-slate-800/60 bg-slate-900/40 hover:bg-slate-800/40 transition-colors">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="font-medium text-slate-300">{stat.label}</p>
                    <p className="text-sm text-slate-500">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="glass border-slate-800/60 bg-indigo-600/10 hover:bg-indigo-600/20 transition-colors sm:col-span-2">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Looking for Opportunities</h3>
                  <p className="text-sm text-slate-400">Open to internships & collaborations</p>
                </div>
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
