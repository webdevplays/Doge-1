// @ts-nocheck
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Globe, Cpu, Moon, ArrowUpRight, Zap, Target } from 'lucide-react';

const Card = ({ icon, title, desc, delay, tag }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-[420px] w-full cursor-pointer"
        >
            <div 
                style={{ transform: "translateZ(60px)" }}
                className="absolute inset-0 glass-panel rounded-[40px] p-12 flex flex-col justify-between overflow-hidden border-white/5 group-hover:border-cyan-500/30 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-cyan-400" size={24} />
                </div>

                <div>
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 border border-white/5 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                        {React.cloneElement(icon, { size: 28, className: "group-hover:scale-110 transition-transform" })}
                    </div>
                    <span className="text-[10px] font-orbitron font-black text-cyan-500/40 tracking-[0.4em] uppercase mb-3 block">
                        {tag}
                    </span>
                    <h3 className="text-3xl font-orbitron font-black mb-6 tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                        {desc}
                    </p>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-cyan-500/60">ACTIVE PROTOCOL</span>
                    </div>
                    <Target size={14} className="text-white/5 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Animated Gradient Pulse */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/5 blur-[100px] group-hover:bg-cyan-500/15 transition-all duration-1000" />
            </div>
        </motion.div>
    );
};

const About: React.FC = () => {
  const features = [
    {
      icon: <Moon />,
      tag: "01 / ORIGIN",
      title: "Moon Protocol",
      desc: "DOGE-1 is the first mission to ever be funded by a memetic economy. A real payload, a real rocket, a real future."
    },
    {
      icon: <Shield />,
      tag: "02 / DEFENSE",
      title: "Hardened Core",
      desc: "Zero taxes, liquidity burned in the atmospheric furnace. A community-hardened asset designed for deep space."
    },
    {
      icon: <Cpu />,
      tag: "03 / ENGINE",
      title: "Hyper Speed",
      desc: "Built on Solana's warp-drive infrastructure. Near-instant settlement for a planetary coalition of holders."
    },
    {
      icon: <Globe />,
      tag: "04 / REACH",
      title: "Unified Hub",
      desc: "Global mission control. Join thousands of pioneers united under the banner of the most legendary mission in history."
    }
  ];

  return (
    <section id="about" className="py-52 px-6 relative overflow-visible z-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row items-end justify-between gap-16">
          <div className="flex-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] uppercase font-black tracking-[0.4em] mb-8"
            >
                MISSION DATA: ALPHA-01
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-9xl font-orbitron font-black text-white uppercase leading-none tracking-tighter"
            >
                THE MISSION <br />
                <span className="text-cyan-400 italic">MANIFESTO</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex-1 lg:max-w-lg"
          >
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-white/10" />
                <Zap size={16} className="text-cyan-500 animate-pulse" />
                <div className="h-px flex-1 bg-white/10" />
            </div>
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-relaxed">
                Space is no longer the playground of billionaire elite. 
                DOGE-1 is the people's gateway to the stars. We are building the first meme-funded lunar civilization.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card key={i} {...f} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
