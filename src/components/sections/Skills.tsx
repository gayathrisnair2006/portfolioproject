"use client";

import { motion } from "framer-motion";
import { Code, Layout, BrainCircuit, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Web Development",
    icon: Layout,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Tools & Environments",
    icon: Wrench,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-2xl mb-4 text-purple-400">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${category.bgColor} ${category.color}`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
