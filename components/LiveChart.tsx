// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Maximize2 } from 'lucide-react';

const LiveChart: React.FC = () => {
  return (
    <section id="chart" className="py-32 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-[10px] font-black tracking-[0.5em] uppercase mb-8"
          >
            Real-Time Telemetry
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-6xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter"
          >
            ORBITAL <span className="text-yellow-400">TRAJECTORY</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl font-light text-lg">
            Monitor the $DOGE-1 ascent in real-time. Live data feeds directly from the Solana mainnet protocols.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full glass-panel rounded-[40px] overflow-hidden border-yellow-500/20 shadow-[0_0_50px_rgba(234,179,8,0.1)]"
        >
          {/* Top Bar Decoration */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 border-b border-white/10 flex items-center justify-between px-8 z-10 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-orbitron font-black text-white/40 tracking-[0.3em] uppercase">Status: Live Feed</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-yellow-400" />
                <span className="text-[10px] font-orbitron font-black text-yellow-400 tracking-[0.2em] uppercase">Volatility: Nominal</span>
              </div>
            </div>
          </div>

          <div className="w-full pt-14 bg-[#080810]">
            <style>
              {`
                #dexscreener-embed {
                  position: relative;
                  width: 100%;
                  padding-bottom: 125%;
                }
                @media (min-width: 1400px) {
                  #dexscreener-embed {
                    padding-bottom: 65%;
                  }
                }
                #dexscreener-embed iframe {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: 0;
                }
              `}
            </style>
            <div id="dexscreener-embed">
              <iframe 
                src="https://dexscreener.com/solana/2hmUqwUYjLgz88ytTmNTMsWjbDbVdPmAEtBjfYrG5vNF?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="DOGE-1 Live Chart"
              />
            </div>
          </div>

          {/* HUD Overlay Elements */}
          <div className="absolute bottom-8 left-8 pointer-events-none hidden md:block">
            <div className="glass-panel px-4 py-2 rounded-lg border-white/5 flex flex-col gap-1">
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Signal Strength</span>
              <div className="flex gap-1">
                {[1,1,1,1,0.4].map((v, i) => (
                  <div key={i} className="w-1 h-3 bg-yellow-400 rounded-full" style={{ opacity: v }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveChart;
