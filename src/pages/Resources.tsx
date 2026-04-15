import { motion } from "framer-motion";
import { BookOpen, Video, FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    type: "Guide",
    icon: <BookOpen className="w-6 h-6" />,
    title: "The 2024 Digital Strategy Playbook",
    description: "A comprehensive guide to scaling your digital presence in a competitive market.",
    date: "March 12, 2024",
  },
  {
    type: "Case Study",
    icon: <FileText className="w-6 h-6" />,
    title: "How Lumina Financial Increased Conversion by 40%",
    description: "An in-depth look at the UI/UX overhaul that transformed Lumina's business.",
    date: "February 28, 2024",
  },
  {
    type: "Workshop",
    icon: <Video className="w-6 h-6" />,
    title: "Mastering Headless Commerce",
    description: "A video series on building high-performance e-commerce sites with Next.js.",
    date: "February 15, 2024",
  },
  {
    type: "Template",
    icon: <Download className="w-6 h-6" />,
    title: "Nexus Design System Starter Kit",
    description: "Our internal Figma and React starter kit for rapid prototyping.",
    date: "January 30, 2024",
  },
];

export default function Resources() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-32">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-[-5px] mb-8 uppercase"
          >
            Insights.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            Strategic thinking and technical guides for the modern digital landscape.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full border border-white/10 bg-[#111] p-10 hover:border-white/30 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-10">
                  <div className="text-white/40 group-hover:text-white transition-colors">
                    {resource.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {resource.type}
                  </span>
                </div>
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-white transition-colors">
                  {resource.title}
                </h2>
                <p className="text-white/40 text-sm mb-10 leading-relaxed max-w-sm">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-white/20">{resource.date}</span>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-[#111] border border-white/10 text-center">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Stay Informed</h2>
          <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">
            Get our latest insights on engineering and design delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-1 px-8 py-4 bg-background border border-white/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
