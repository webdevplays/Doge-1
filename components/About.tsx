
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Globe, Cpu, Moon, ArrowUpRight } from 'lucide-react';

const Card = ({ icon, title, desc, delay }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-[380px] w-full"
        >
            <div 
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 glass-panel rounded-3xl p-10 flex flex-col justify-between overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-cyan-400" size={20} />
                </div>

                <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500/20 transition-all border border-white/5">
                        {React.cloneElement(icon, { className: "text-cyan-400" })}
                    </div>
                    <h3 className="text-2xl font-orbitron font-black mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {desc}
                    </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan-500/50">Status: Operational</span>
                </div>

                {/* Background Glow */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/10 blur-[60px] group-hover:bg-cyan-500/30 transition-all duration-700" />
            </div>
        </motion.div>
    );
};

const About: React.FC = () => {
  const features = [
    {
      icon: <Moon />,
      title: "Lunar Legacy",
      desc: "More than just a meme, DOGE-1 represents the first satellite payload funded entirely by DOGE, proving the power of decentralized finance."
    },
    {
      icon: <Shield />,
      title: "Cosmic Security",
      desc: "Our contracts are hardened for the vacuum of space. Audited, verified, and community-owned from day zero."
    },
    {
      icon: <Cpu />,
      title: "Tech Stack",
      desc: "Leveraging Solana's lightning-fast throughput for real-time mission updates and low-latency interaction."
    },
    {
      icon: <Globe />,
      title: "Global Reach",
      desc: "A worldwide coalition of developers, space nerds, and degens united under one banner: To the moon."
    }
  ];

  return (
    <section id="about" className="py-40 px-6 relative overflow-visible z-30">
        <div className="scanline" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
            >
                Briefing Room
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-orbitron font-black text-white"
            >
                THE MISSION <br />
                <span className="text-glow text-cyan-400">MANIFESTO</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex-1"
          >
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                We are building the infrastructure for the next generation of space exploration. 
                DOGE-1 isn't just a satellite; it's the beginning of a multi-planetary economy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {features.map((f, i) => (
            <Card key={i} {...f} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
