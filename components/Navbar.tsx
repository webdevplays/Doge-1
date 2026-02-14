
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Menu, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-6"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl group-hover:bg-cyan-500/40 transition-all" />
              <div className="relative w-full h-full bg-black border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <Rocket className="text-cyan-400 group-hover:translate-y-[-1px] transition-transform" size={18} />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-xl tracking-tighter text-white leading-none">
                DOGE<span className="text-cyan-400">-1</span>
              </span>
              <span className="text-[7px] uppercase tracking-[0.4em] text-gray-500 font-bold mt-1">Mission Control</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {['Mission', 'About', 'Tokenomics', 'Buy'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <Activity size={12} className="text-cyan-400 animate-pulse" />
            <span className="text-[9px] font-orbitron font-bold tracking-widest text-cyan-400/80 uppercase">Systems: Nominal</span>
          </div>

          <div className="h-6 w-px bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ y: -1, color: '#00f2ff' }}
              href="#" className="text-gray-400 transition-colors"
            >
              <Twitter size={16} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -1, color: '#00f2ff' }}
              href="#" className="text-gray-400 transition-colors"
            >
              <MessageCircle size={16} />
            </motion.a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block px-6 py-2.5 bg-white/5 border border-white/10 text-white font-orbitron text-[9px] font-black tracking-[0.3em] rounded-sm transition-all uppercase"
          >
            Connect
          </motion.button>

          <button className="lg:hidden text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
