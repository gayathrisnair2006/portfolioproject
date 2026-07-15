"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "NPTEL Elite Certification",
    description: "Secured Elite Certificate for Java Programming in NPTEL.",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Hackathons",
    description: "Attended Smart India Hackathon and NASA Space Apps Challenge.",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Technical Workshops",
    description: "Attended workshops on Cybersecurity, App Development, GitHub, and Flutter.",
    icon: Medal,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-slate-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-2xl mb-4 text-yellow-400">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {achievements.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass h-full hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
