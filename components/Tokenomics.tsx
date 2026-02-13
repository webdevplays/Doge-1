
import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics: React.FC = () => {
  const stats = [
    { label: "Circulating Supply", value: "650,000,000", suffix: "D1", desc: "Available to Public" },
    { label: "Protocol Burn", value: "350,000,000", suffix: "D1", desc: "Permanent Deflation" },
    { label: "Liquidity Lock", value: "100", suffix: "%", desc: "UniSwap/Raydium" },
    { label: "Team Vesting", value: "0", suffix: "%", desc: "No Team Tokens" }
  ];

  return (
    <section id="tokenomics" className="py-40 px-6 relative z-30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-orbitron font-black mb-8"
          >
            SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ECONOMICS</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            High-efficiency distribution models designed for interplanetary scale and long-term trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visual Diagram Placeholder */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-panel rounded-[40px] p-12 flex flex-col items-center justify-center relative group min-h-[500px]"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)] group-hover:scale-125 transition-transform duration-1000" />
                
                {/* Holographic Ring Animation */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-purple-500/20 rounded-full"
                    />
                    <div className="text-center z-10">
                        <span className="block font-orbitron text-xs text-cyan-400 mb-2 uppercase tracking-widest">Core Status</span>
                        <span className="block font-orbitron text-4xl font-black text-white">OPTIMAL</span>
                    </div>
                </div>

                <div className="mt-12 w-full grid grid-cols-2 gap-4">
                    <div className="p-4 border border-white/5 bg-white/5 rounded-2xl">
                        <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Stability Rate</span>
                        <span className="font-orbitron text-xl text-white">99.98%</span>
                    </div>
                    <div className="p-4 border border-white/5 bg-white/5 rounded-2xl">
                        <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Growth Index</span>
                        <span className="font-orbitron text-xl text-cyan-400">+420.69%</span>
                    </div>
                </div>
            </motion.div>

            {/* Stats List */}
            <div className="space-y-6">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel p-8 rounded-3xl flex items-center justify-between group hover:border-cyan-500/30 transition-all"
                    >
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-[0.3em] font-bold mb-2 block">{s.label}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-orbitron font-black text-white group-hover:text-cyan-400 transition-colors">
                                    {s.value}
                                </span>
                                <span className="text-cyan-500 font-bold">{s.suffix}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{s.desc}</p>
                        </div>
                        <div className="h-12 w-px bg-white/10 hidden sm:block" />
                        <div className="hidden sm:flex flex-col items-end">
                            <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '80%' }}
                                    className="h-full bg-cyan-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
