import { motion } from "framer-motion";
import { Users, Target, Rocket, Heart } from "lucide-react";

export default function Agency() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-32">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-[-5px] mb-12 uppercase"
          >
            The Agency.
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-white/50 leading-relaxed tracking-tight"
            >
              Nexus.DevM is a boutique digital agency born from the desire to push the boundaries of what's possible on the web. We are a collective of engineers and designers who believe that excellence is the only standard.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-[#111] border border-white/10"
            >
              <img
                src="https://picsum.photos/seed/agency/1200/800"
                alt="Our Team"
                className="object-cover w-full h-full grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </header>

        <section className="py-32 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                icon: <Users className="w-6 h-6 text-white/40" />,
                title: "Client-Centric",
                description: "Your goals are our goals. We work as an extension of your team.",
              },
              {
                icon: <Target className="w-6 h-6 text-white/40" />,
                title: "Strategy First",
                description: "We don't start coding until we have a clear path to success.",
              },
              {
                icon: <Rocket className="w-6 h-6 text-white/40" />,
                title: "Innovation",
                description: "We constantly explore new technologies to give you an edge.",
              },
              {
                icon: <Heart className="w-6 h-6 text-white/40" />,
                title: "Passion",
                description: "We love what we do, and it shows in every pixel we craft.",
              },
            ].map((value, i) => (
              <div key={i}>
                <div className="mb-8">{value.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 border-t border-white/10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase">Our Philosophy</h2>
            <p className="text-2xl md:text-4xl font-light leading-tight mb-12 text-white/80 tracking-tight">
              "Digital products should be more than just functional. They should be intentional experiences that resonate with users and drive meaningful action."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white" />
              <div>
                <p className="font-black uppercase tracking-widest text-sm">Alex Rivera</p>
                <p className="text-xs uppercase tracking-widest text-white/30">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-white/10">
          <h2 className="text-4xl font-black mb-20 uppercase tracking-tighter">The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah Chen", role: "Lead Engineer", image: "https://picsum.photos/seed/sarah/400/400" },
              { name: "Marcus Thorne", role: "UX Strategist", image: "https://picsum.photos/seed/marcus/400/400" },
              { name: "Elena Rossi", role: "Visual Designer", image: "https://picsum.photos/seed/elena/400/400" },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-[#111] border border-white/10 mb-8 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-white/30 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
