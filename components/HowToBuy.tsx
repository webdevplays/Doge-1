import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Globe, Rocket, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Wallet size={24} />,
      title: "Sync Wallet",
      tagline: "Step 01: Pre-Flight",
      desc: "Connect your Phantom or Solflare interface. Ensure your secure seed is offline."
    },
    {
      icon: <Globe size={24} />,
      title: "Bridge SOL",
      tagline: "Step 02: Propulsion",
      desc: "Acquire Solana fuel and transmit it to your mission control address."
    },
    {
      icon: <Rocket size={24} />,
      title: "Finalize Swap",
      tagline: "Step 03: Liftoff",
      desc: "Execute the swap sequence on Jupiter. Input the DOGE-1 signature and confirm."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Hold for Orbit",
      tagline: "Step 04: Arrival",
      desc: "Mission successful. Your tokens are secured. Prepare for atmospheric exit."
    }
  ];

  return (
    <section id="buy" className="py-40 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-cyan-500 font-orbitron text-xs tracking-[0.6em] uppercase font-black mb-6 block">The Deployment Route</span>
            <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white leading-none uppercase tracking-tighter">
                MISSION <br /> <span className="text-cyan-400 italic">SEQUENCE</span>
            </h2>
          </div>
          <div className="hidden md:block text-right max-w-sm">
            <div className="flex items-center gap-2 justify-end mb-4">
                <span className="text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase">Security Level: Maximum</span>
                <Zap size={12} className="text-cyan-400" />
            </div>
            <p className="text-gray-500 font-light text-lg">
                The path to the moon is precise. Follow these protocols for a successful docking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-panel p-10 h-full rounded-[40px] group-hover:bg-cyan-500/[0.03] transition-all border-b-8 border-b-transparent group-hover:border-b-cyan-500">
                <div className="flex items-center justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                        {s.icon}
                    </div>
                    <span className="font-orbitron text-5xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">0{i+1}</span>
                </div>
                
                <span className="text-[10px] uppercase font-black text-cyan-500/60 tracking-[0.4em] block mb-4">{s.tagline}</span>
                <h3 className="text-2xl font-orbitron font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase">{s.title}</h3>
                <p className="text-gray-400 text-base font-light leading-relaxed">
                  {s.desc}
                </p>

                <motion.div 
                    className="mt-10 flex items-center gap-3 text-cyan-400 text-[10px] font-black tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity uppercase"
                >
                    INITIALIZE <ChevronRight size={14} />
                </motion.div>
              </div>
              
              {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 translate-y-[-50%] z-10 text-white/10 group-hover:text-cyan-500/30 transition-colors">
                      <ChevronRight size={40} />
                  </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Direct Action Hub */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 glass-panel p-10 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10 border-cyan-500/20"
        >
            <div className="flex items-center gap-6 flex-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <CheckCircle2 size={24} />
                </div>
                <div className="font-orbitron">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black mb-1">Official Payload Address</span>
                    <span className="text-lg font-black text-white break-all tracking-tighter">DOGE1m1ss1on...LUNAR777</span>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('DOGE1m1ss1onLUNAR777');
                    alert('Signature Copied to Clipboard');
                  }}
                  className="px-10 py-5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] hover:bg-white/10 transition-all uppercase"
                >
                    COPY SIGNATURE
                </button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://jup.ag" target="_blank"
                  className="px-10 py-5 bg-cyan-500 text-black rounded-full text-xs font-orbitron font-black tracking-[0.3em] transition-all flex items-center gap-3 uppercase hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
                >
                    INITIATE SWAP ON JUPITER
                </motion.a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;