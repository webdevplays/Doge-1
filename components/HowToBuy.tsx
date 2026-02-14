
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Globe, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Wallet size={24} />,
      title: "Secure a Wallet",
      tagline: "Phase 1: Readiness",
      desc: "Deploy a Phantom or Solflare wallet. This is your mission control interface for all DOGE-1 assets."
    },
    {
      icon: <Globe size={24} />,
      title: "Acquire SOL Fuel",
      tagline: "Phase 2: Refueling",
      desc: "Obtain Solana (SOL) from any major exchange and transmit it to your mission address."
    },
    {
      icon: <Rocket size={24} />,
      title: "Initialize Swap",
      tagline: "Phase 3: Launch Prep",
      desc: "Connect to Raydium or Jupiter. Input the DOGE-1 contract signature and initiate the swap sequence."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Lunar Landing",
      tagline: "Phase 4: Mission Success",
      desc: "Confirm the handshake. You are now officially part of the most ambitious meme-to-moon deployment."
    }
  ];

  return (
    <section id="buy" className="py-40 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <span className="text-cyan-500 font-orbitron text-xs tracking-[0.5em] uppercase font-bold mb-4 block">Deployment Protocol</span>
            <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white">THE LAUNCH <br /> <span className="text-cyan-400">SEQUENCE</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm text-right hidden md:block">
            Every great journey starts with a single step. Follow our certified route to join the mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-panel p-8 h-full rounded-2xl group-hover:bg-white/[0.04] transition-all border-l-4 border-l-transparent group-hover:border-l-cyan-500">
                <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        {s.icon}
                    </div>
                    <span className="font-orbitron text-4xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">0{i+1}</span>
                </div>
                
                <span className="text-[10px] uppercase font-bold text-cyan-500/50 tracking-widest block mb-2">{s.tagline}</span>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {s.desc}
                </p>

                <motion.div 
                    className="mt-8 flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    PROCEED <ChevronRight size={14} />
                </motion.div>
              </div>
              
              {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-white/5 group-hover:text-cyan-500/20 transition-colors">
                      <ChevronRight size={48} />
                  </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 glass-panel p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                    <CheckCircle2 size={20} />
                </div>
                <div className="font-orbitron">
                    <span className="block text-xs text-gray-500">Official Signature</span>
                    <span className="text-sm font-bold text-white break-all">00000000000......0000000000</span>
                </div>
            </div>
            <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest hover:bg-white/10 transition-all">
                COPY CONTRACT
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
