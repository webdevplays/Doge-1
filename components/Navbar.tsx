// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Menu, X, Activity, ChevronRight, Timer } from 'lucide-react';

const UrgencyBanner = () => {
  return (
    <div className="w-full bg-cyan-500 py-2.5 overflow-hidden whitespace-nowrap border-b border-black/10 relative z-[110] group cursor-pointer">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-12 text-black font-orbitron font-black text-[9px] tracking-[0.3em] uppercase">
            <span>DOGE-1 Mission Deployment: ACTIVE</span>
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <span>Join the Lunar Fleet Today</span>
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <div className="flex items-center gap-2">
                <Timer size={12} />
                <span>PHASE 1 SECURING FAST</span>
            </div>
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Mission', href: '#mission', id: '01' },
    { name: 'About', href: '#about', id: '02' },
    { name: 'Tokenomics', href: '#tokenomics', id: '03' },
    { name: 'Buy', href: '#buy', id: '04' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren"
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[110] flex flex-col"
      >
        <UrgencyBanner />
        
        <div className="w-full px-6 py-5 bg-[#020205]/40 backdrop-blur-md border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
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
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <Activity size={12} className="text-cyan-400 animate-pulse" />
                <span className="text-[9px] font-orbitron font-bold tracking-widest text-cyan-400/80 uppercase">
                  Systems: Nominal
                </span>
              </div>

              <div className="h-6 w-px bg-white/10 hidden md:block" />

              <div className="flex items-center gap-4">
                <motion.a 
                  whileHover={{ y: -1, color: '#00f2ff' }}
                  href="https://twitter.com" target="_blank" className="text-gray-400 transition-colors"
                >
                  <Twitter size={16} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -1, color: '#00f2ff' }}
                  href="https://t.me" target="_blank" className="text-gray-400 transition-colors"
                >
                  <MessageCircle size={16} />
                </motion.a>
              </div>

              <motion.a 
                href="#buy"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-orbitron text-[9px] font-black tracking-[0.3em] rounded-sm transition-all uppercase"
              >
                JOIN MISSION
              </motion.a>

              {/* Mobile Toggle Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white relative z-[120] p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[105] bg-[#020205] flex flex-col pt-32 px-10"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              <span className="text-[10px] font-orbitron font-bold text-cyan-500/50 tracking-[0.5em] uppercase">Navigation Matrix</span>
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={linkVariants}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-orbitron font-bold text-gray-700 group-hover:text-cyan-500 transition-colors">
                      {link.id}
                    </span>
                    <span className="text-4xl md:text-5xl font-orbitron font-black text-white group-hover:text-cyan-400 transition-all group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </div>
                  <ChevronRight className="text-white/5 group-hover:text-cyan-400 transition-colors" size={32} />
                </motion.a>
              ))}
            </div>

            <motion.div 
              variants={linkVariants}
              className="mt-auto pb-12 relative z-10 border-t border-white/5 pt-12 flex flex-col gap-8"
            >
              <div className="flex items-center gap-6">
                <a href="https://twitter.com" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="https://t.me" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                  <MessageCircle size={20} />
                </a>
                <div className="flex-1" />
                <div className="flex items-center gap-3">
                  <Activity size={12} className="text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-orbitron font-bold text-cyan-400/80 tracking-widest uppercase">Online</span>
                </div>
              </div>

              <a 
                href="#buy"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-cyan-500 text-black text-center font-orbitron font-black text-xs tracking-[0.4em] uppercase rounded-sm hover:bg-cyan-400 transition-colors"
              >
                JOIN MISSION
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
