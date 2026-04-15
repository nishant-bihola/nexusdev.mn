import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 px-6 md:px-32">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-light tracking-[-3px] leading-none mb-8">
              Let's build the future.
            </h2>
            <p className="text-white/40 text-lg max-w-sm">
              Nexus.DevM — Engineering excellence for the next generation of digital products.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-black px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all"
          >
            Start Project
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-widest text-white/30">© {currentYear} NEXUS.DEVM</span>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Linkedin</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Github</a>
            </div>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
