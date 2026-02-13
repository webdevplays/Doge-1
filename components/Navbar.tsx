
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Github, Menu, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[60] px-6 py-6"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl group-hover:bg-cyan-500/40 transition-all" />
              <div className="relative w-full h-full bg-black border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <Rocket className="text-cyan-400 group-hover:translate-y-[-2px] transition-transform" size={20} />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-2xl tracking-tighter text-white leading-none">
                DOGE<span className="text-cyan-400">-1</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500 font-bold mt-1">Mission Control</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {['Mission', 'About', 'Tokenomics', 'Buy'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="text-[11px] font-orbitron font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Activity size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-[10px] font-orbitron font-bold tracking-widest text-cyan-400/80">SYSTEMS: NOMINAL</span>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ y: -2, color: '#00f2ff' }}
              href="#" className="text-gray-400 transition-colors"
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2, color: '#00f2ff' }}
              href="#" className="text-gray-400 transition-colors"
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block px-8 py-3 bg-white/5 border border-white/10 text-white font-orbitron text-[10px] font-black tracking-[0.3em] rounded-sm transition-all"
          >
            CONNECT TERMINAL
          </motion.button>

          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
