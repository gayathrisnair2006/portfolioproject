import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold font-heading text-white tracking-wider flex items-center gap-2">
              <span className="text-indigo-500">&lt;</span>
              Gayathri
              <span className="text-indigo-500">/&gt;</span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Second-Year B.Tech AI & Data Science Student passionate about building intelligent solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/gayathrisnair2006" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:snairgayathri7@gmail.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-slate-400 pt-2">
              snairgayathri7@gmail.com
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Gayathri S Nair. All rights reserved.
          </p>
          
          <Button variant="ghost" size="sm" className="gap-2 text-slate-400 hover:text-white" asChild>
            <a href="#hero">
              Back to top <ArrowUp className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
