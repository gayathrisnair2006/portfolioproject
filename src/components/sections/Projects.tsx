"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Github } from "@/components/ui/icons";

const projects = [
  {
    title: "EV Route Planning Application",
    description: "An intelligent application designed to optimize route planning for Electric Vehicles by considering charging station locations, battery range, and real-time traffic data.",
    image: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
    tags: ["React", "Python", "Machine Learning", "Maps API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real Estate Price Predictor",
    description: "A robust machine learning model that predicts real estate prices based on various features such as location, square footage, amenities, and market trends.",
    image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    tags: ["Python", "Scikit-learn", "Pandas", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Mental Health Sentiment Analyzer",
    description: "An AI-powered tool that analyzes text inputs to determine sentiment and potential mental health indicators, aiming to provide early detection and support suggestions.",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    tags: ["TensorFlow", "NLP", "Python", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Anonymous Evidence Sharing Platform",
    description: "A secure, anonymous platform for employees in an office to safely report workplace misconduct and harassment, featuring encryption and strict privacy controls.",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    tags: ["Next.js", "React", "Cybersecurity", "Encryption"],
    github: "#",
    demo: "#",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4 text-blue-400">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card className="flex flex-col h-full w-full overflow-hidden glass hover:border-indigo-500/50 transition-colors duration-300 group">
                {/* Image Placeholder */}
                <div className={`h-48 w-full ${project.image} relative overflow-hidden flex items-center justify-center border-b border-slate-800`}>
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  <FolderGit2 className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 glass hover:bg-slate-800" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-500" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
