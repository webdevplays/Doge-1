// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Flame, Lock } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const stats = [
    { label: "Public Launch", value: "65%", icon: <Zap size={20} />, desc: "Fair entry for the people" },
    { label: "Token Burn", value: "35%", icon: <Flame size={20} />, desc: "Deflationary pressure" },
    { label: "Liquidity", value: "100%", icon: <Lock size={20} />, desc: "LP Permanently Locked" },
    { label: "Tax Protocol", value: "0/0", icon: <Target size={20} />, desc: "Zero Buy or Sell Tax" }
  ];

  return (
    <section id="tokenomics" className="py-40 px-6 relative z-30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] font-black tracking-[0.5em] uppercase mb-8"
          >
            System Distribution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-orbitron font-black mb-8 uppercase tracking-tighter"
          >
            FUELING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 italic">ASCENT</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Designed for interplanetary scaling. No hidden allocations, no team dump, just pure community energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Holographic Visualizer */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative h-[600px] flex items-center justify-center group"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
                
                {/* Rotating Rings */}
                <div className="relative w-80 h-80">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-[3px] border-dashed border-cyan-500/40 rounded-full"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8 border border-purple-500/30 rounded-full"
                    />
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-16 bg-cyan-500/5 rounded-full blur-2xl"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className="block font-orbitron text-[10px] text-cyan-400 mb-2 uppercase tracking-[0.4em] font-black">Supply Status</span>
                        <span className="block font-orbitron text-5xl font-black text-white text-glow">1.0B</span>
                        <span className="block font-orbitron text-[10px] text-gray-500 mt-2 uppercase tracking-widest">$DOGE-1</span>
                    </div>
                </div>

                {/* Floating Tags */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-10 right-10 glass-panel px-6 py-4 rounded-xl border-cyan-500/30"
                >
                    <span className="block text-[8px] text-gray-500 tracking-[0.3em] uppercase mb-1">Stability</span>
                    <span className="text-xl font-orbitron font-black text-white uppercase">Nominal</span>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-10 left-10 glass-panel px-6 py-4 rounded-xl border-purple-500/30"
                >
                    <span className="block text-[8px] text-gray-500 tracking-[0.3em] uppercase mb-1">Growth Index</span>
                    <span className="text-xl font-orbitron font-black text-cyan-400 uppercase">Extreme</span>
                </motion.div>
            </motion.div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel p-8 rounded-[32px] group hover:bg-white/[0.04] hover:border-cyan-500/40 transition-all border-l-4 border-l-transparent hover:border-l-cyan-500 h-full"
                    >
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                            {s.icon}
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-[0.4em] font-black mb-2 block">{s.label}</span>
                        <div className="text-4xl font-orbitron font-black text-white group-hover:text-cyan-400 transition-colors mb-3">
                            {s.value}
                        </div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Conversion Trust Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-1 rounded-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-4xl mx-auto"
        >
          <div className="bg-[#020205] rounded-full px-12 py-5 flex items-center justify-between">
            <div className="flex items-center gap-10 opacity-40">
              <span className="text-[10px] font-black tracking-widest uppercase">Contract Verified</span>
              <span className="text-[10px] font-black tracking-widest uppercase">Audit Passed</span>
              <span className="text-[10px] font-black tracking-widest uppercase">Ownership Renounced</span>
            </div>
            <button className="text-cyan-400 font-orbitron text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
              VIEW ON SOLSCAN
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
