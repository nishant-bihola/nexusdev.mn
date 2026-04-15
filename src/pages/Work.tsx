import { motion } from "framer-motion";

const projects = [
  {
    title: "Lumina Financial",
    category: "Fintech • Web App",
    description: "A complete digital transformation for a leading investment firm.",
    image: "https://picsum.photos/seed/lumina/1200/800",
    tags: ["React", "Node.js", "UI/UX"],
  },
  {
    title: "Vanguard Retail",
    category: "E-commerce • Strategy",
    description: "Scaling a boutique brand to a global audience with headless commerce.",
    image: "https://picsum.photos/seed/vanguard/1200/800",
    tags: ["Shopify", "Next.js", "SEO"],
  },
  {
    title: "Aura Wellness",
    category: "Health • Mobile App",
    description: "A meditation and wellness platform focused on minimalist design.",
    image: "https://picsum.photos/seed/aura/1200/800",
    tags: ["React Native", "Design System"],
  },
  {
    title: "Nexus Cloud",
    category: "SaaS • Branding",
    description: "Identity design and product strategy for a cloud infrastructure startup.",
    image: "https://picsum.photos/seed/cloud/1200/800",
    tags: ["Branding", "Webflow"],
  },
  {
    title: "Titan Logistics",
    category: "Enterprise • Dashboard",
    description: "Optimizing supply chain visibility with real-time data visualization.",
    image: "https://picsum.photos/seed/titan/1200/800",
    tags: ["D3.js", "Enterprise"],
  },
  {
    title: "Pulse Media",
    category: "Entertainment • Platform",
    description: "A high-traffic content delivery network for digital creators.",
    image: "https://picsum.photos/seed/pulse/1200/800",
    tags: ["AWS", "Streaming"],
  },
];

export default function Work() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-32">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-[-5px] mb-8 uppercase"
          >
            Work.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            A collection of high-end digital products engineered for performance and impact.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-[#111] border border-white/10 group-hover:border-white/30 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-black mb-3 uppercase tracking-tight">{project.title}</h2>
              <p className="text-white/40 text-sm mb-6 leading-relaxed max-w-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
