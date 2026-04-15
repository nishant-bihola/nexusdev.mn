import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-24 px-6 md:px-32">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-[-5px] mb-8 uppercase"
          >
            Contact.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            Have a project in mind? Let's build something incredible together.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-16">
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-4">Email</h3>
                  <p className="text-white/60 text-lg">hello@nexusdevm.com</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-4">Phone</h3>
                  <p className="text-white/60 text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-4">Studio</h3>
                  <p className="text-white/60 text-lg">123 Creative Way, Suite 400</p>
                  <p className="text-white/60 text-lg">Brooklyn, NY 11201</p>
                </div>
              </div>
            </div>

            <div className="mt-24 p-12 bg-[#111] border border-white/10">
              <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-white/30">Availability</h4>
              <p className="text-white/60 text-lg leading-relaxed">
                We are currently accepting new projects for <span className="text-white font-bold">Q3 2024</span>.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-16 bg-white/5 border border-white/10">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-black mb-10">
                  <Send size={32} />
                </div>
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Sent.</h2>
                <p className="text-white/40 text-lg mb-12 max-w-xs">
                  Thank you. We'll be in touch within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-xs font-black uppercase tracking-widest border-b-2 border-white pb-1 hover:text-white/60 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Name</label>
                    <input 
                      placeholder="YOUR NAME" 
                      required 
                      className="w-full h-16 px-8 bg-background border border-white/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Email</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      required 
                      className="w-full h-16 px-8 bg-background border border-white/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Subject</label>
                  <input 
                    placeholder="PROJECT TYPE" 
                    required 
                    className="w-full h-16 px-8 bg-background border border-white/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Message</label>
                  <textarea 
                    placeholder="TELL US ABOUT YOUR PROJECT" 
                    required 
                    className="w-full min-h-[250px] p-8 bg-background border border-white/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors resize-none" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full h-20 bg-white text-black text-sm font-black uppercase tracking-[0.3em] hover:bg-white/90 transition-all disabled:opacity-50" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
