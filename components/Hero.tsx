import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Zap, ChevronDown, ShieldCheck, Users, TrendingUp, Globe } from 'lucide-react';

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 0.3], [0, -300]);
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.2], [1, 0.9]);

  const stats = [
    { icon: <TrendingUp size={16} className="text-cyan-400" />, label: "MARKET CAP", value: "$12.4M", desc: "Ascending Rapidly" },
    { icon: <Users size={16} className="text-cyan-400" />, label: "HOLDERS", value: "24,812", desc: "Lunar Citizens" },
    { icon: <ShieldCheck size={16} className="text-cyan-400" />, label: "LIQUIDITY", value: "BURNED", desc: "Protocol Secured" },
  ];

  const badges = [
    { text: "Fair Launch", icon: <Globe size={10} /> },
    { text: "Community Owned", icon: <Users size={10} /> },
    { text: "Audit Passed", icon: <ShieldCheck size={10} /> },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center z-50 max-w-7xl w-full flex flex-col items-center justify-center"
      >
        {/* Urgent Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-cyan-400">{badge.icon}</span>
              <span className="text-[8px] font-orbitron font-black text-white/60 tracking-widest uppercase">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(0,242,255,1)]" />
          <span className="text-[9px] font-orbitron font-black text-cyan-400 tracking-[0.3em] uppercase">Phase 1: Deployment Live</span>
        </motion.div>

        <h1 className="font-orbitron font-black leading-[0.7] tracking-tighter mb-10 select-none">
          <motion.span 
            initial={{ opacity: 0, filter: 'blur(20px)', y: 60 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="block text-white text-[18vw] md:text-[14vw] uppercase"
          >
            DOGE-1
          </motion.span>
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-[9vw] md:text-[6.5vw] mt-2 font-black italic uppercase flex items-center justify-center gap-4"
          >
            THE MOON MISSION.
          </motion.div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl font-light mb-16 tracking-wide leading-relaxed px-4"
        >
          Not just another token. The first lunar payload funded entirely by the community. 
          A historic leap for decentralized culture on Solana.
        </motion.p>

        {/* Real-time FOMO Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-cyan-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-3 justify-center">
                {stat.icon}
                <span className="text-[10px] font-orbitron font-black text-gray-500 tracking-widest uppercase">{stat.label}</span>
              </div>
              <div className="text-4xl font-orbitron font-black text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest font-bold">{stat.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <motion.button
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 70px rgba(0, 242, 255, 0.8)"
            }}
            whileTap={{ scale: 0.97 }}
            className="relative px-20 py-8 bg-cyan-500 text-black font-orbitron font-black rounded-sm overflow-hidden group min-w-[340px] cta-glow"
          >
            <span className="relative z-10 flex items-center justify-center gap-4 text-sm tracking-[0.3em] uppercase">
              BUY DOGE-1 NOW
              <Zap size={22} fill="currentColor" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/20 animate-pulse pointer-events-none" />
          </motion.button>

          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-20 py-8 bg-white/5 border border-white/10 text-white font-orbitron font-bold rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all min-w-[340px] uppercase tracking-widest text-sm"
          >
            MISSION DECK
            <div className="absolute inset-0 bg-cyan-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </motion.div>

        <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 opacity-30 mt-24"
        >
            <span className="font-orbitron text-[9px] font-black tracking-[0.6em] text-cyan-400 uppercase">Commence Descent</span>
            <ChevronDown size={28} className="text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Cinematic Fog and Warp Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none -z-10 overflow-visible opacity-60">
        <div className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-purple-600/10 blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-cyan-600/10 blur-[240px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;