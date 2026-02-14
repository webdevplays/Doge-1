// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Github, Mail, ArrowUpCircle, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-40 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-sm">
                <Rocket className="text-black" size={24} fill="currentColor" />
              </div>
              <span className="font-orbitron font-black text-3xl tracking-tighter text-white">
                DOGE<span className="text-cyan-400">-1</span>
              </span>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mb-10">
              Forging the first multi-planetary meme economy. Join the decentralized frontier and secure your place in the lunar history books.
            </p>
            <div className="flex items-center gap-8">
              <motion.div 
                whileHover={{ scale: 1.1, color: '#00f2ff' }}
                className="text-gray-600 cursor-pointer transition-colors"
              >
                <Twitter size={24} />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, color: '#00f2ff' }}
                className="text-gray-600 cursor-pointer transition-colors"
              >
                <MessageCircle size={24} />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, color: '#00f2ff' }}
                className="text-gray-600 cursor-pointer transition-colors"
              >
                <Github size={24} />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, color: '#00f2ff' }}
                className="text-gray-600 cursor-pointer transition-colors"
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-orbitron font-bold text-white text-xs uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="space-y-4">
              {['Launchpad', 'Manifesto', 'Statistics', 'Acquisition'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-cyan-400 text-sm tracking-widest transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-orbitron font-bold text-white text-xs uppercase tracking-[0.4em] mb-10">Resources</h4>
            <ul className="space-y-4">
              {['Whitepaper', 'Audit', 'GitHub', 'Brand Kit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm tracking-widest transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col items-end justify-start">
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-3 text-cyan-400 font-orbitron text-xs font-bold tracking-[0.3em]"
            >
              RETURN TO ORBIT
              <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.3em] text-gray-600">
            <span>© 2024 DOGE-1 MISSION CONTROL</span>
            <div className="w-1 h-1 rounded-full bg-gray-800" />
            <span>SOLANA MAINNET</span>
          </div>

          <div className="flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TERMS_OF_SERVICE</a>
          </div>
          
          <div className="text-[10px] font-orbitron font-bold text-cyan-500/50">
            BUILD_VER: 2.0.4-STABLE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
