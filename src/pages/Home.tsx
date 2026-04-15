import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="bg-glow absolute top-[-100px] right-[-100px] w-[600px] h-[600px]" />
        <div className="grid-line-v left-16" />
        <div className="grid-line-v right-16" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-32 pt-20">
        <div className="absolute left-16 bottom-32 origin-left -rotate-90 translate-y-full">
          <span className="text-[11px] uppercase tracking-[0.5em] text-white/30 whitespace-nowrap">
            ESTABLISHED 2024 / NEW YORK
          </span>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="hero-massive font-black mb-8">
                NEXUS
              </h1>
              <p className="text-xl text-white/50 max-w-lg leading-relaxed tracking-tight">
                Full-stack creative engineering for brands that demand a higher standard of digital execution.
              </p>
              <div className="flex gap-6 mt-12">
                <Link to="/work" className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
                  View Work
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "FINTECH", title: "Aether Capital" },
                { label: "LUXURY", title: "Vanguard Yachts" },
                { label: "CRYPTO", title: "Genesis Node" },
                { label: "MEDIA", title: "Stealth Pulse" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="aspect-[4/5] bg-[#111] border border-white/10 p-6 flex flex-col justify-end group cursor-pointer hover:border-white/30 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{item.label}</span>
                  <span className="text-sm font-bold uppercase tracking-tight">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 md:px-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Engineering",
                description: "High-performance codebases built for scale and speed.",
              },
              {
                title: "Design",
                description: "Minimalist, intentional interfaces that prioritize clarity.",
              },
              {
                title: "Strategy",
                description: "Data-driven roadmaps that align with business goals.",
              },
            ].map((feature, i) => (
              <div key={i} className="group">
                <span className="text-[11px] text-white/30 mb-4 block">0{i + 1}</span>
                <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview (Mobile/Tablet) */}
      <section className="py-32 px-6 md:px-32 lg:hidden bg-[#0a0a0a]">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "FINTECH", title: "Aether Capital" },
            { label: "LUXURY", title: "Vanguard Yachts" },
            { label: "CRYPTO", title: "Genesis Node" },
            { label: "MEDIA", title: "Stealth Pulse" },
          ].map((item, i) => (
            <div key={i} className="aspect-[4/5] bg-[#111] border border-white/10 p-8 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{item.label}</span>
              <span className="text-xl font-bold uppercase tracking-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
