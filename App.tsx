// @ts-nocheck
import React, { Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import StarField from './components/StarField';
import RocketScene from './components/RocketScene';
import { Rocket, Zap } from 'lucide-react';

const LoadingMission = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[5] bg-transparent">
    <div className="relative w-16 h-16 mb-6">
      <div className="absolute inset-0 border-4 border-cyan-500/10 rounded-full" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-4 border-t-cyan-500 rounded-full"
      />
    </div>
    <span className="font-orbitron text-[10px] text-cyan-400 font-black tracking-[0.5em] uppercase animate-pulse">
      SYNCING ORBITAL DATA...
    </span>
  </div>
);

const StickyBuyButton = ({ scrollProgress }: { scrollProgress: any }) => {
  const opacity = useTransform(scrollProgress, [0.05, 0.1], [0, 1]);
  const y = useTransform(scrollProgress, [0.05, 0.1], [100, 0]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="fixed bottom-10 right-10 z-[120] hidden sm:block"
    >
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 242, 255, 0.7)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-4 px-10 py-5 bg-cyan-500 text-black font-orbitron font-black text-xs tracking-[0.2em] rounded-full cta-glow group"
      >
        <div className="relative">
            <Rocket size={18} fill="currentColor" className="group-hover:-translate-y-1 transition-transform" />
        </div>
        ACQUIRE DOGE-1
      </motion.button>
    </motion.div>
  );
};

const App: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });
  const velocityFactor = useTransform(smoothVelocity, [-3000, 3000], [-5, 5], { clamp: false });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });

  const warpOpacity = useTransform(smoothVelocity, [800, 4000], [0, 0.7]);

  return (
    <div className="relative bg-[#020205] min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Layer 0: Background Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarField scrollProgress={smoothProgress} />
      </div>

      {/* Layer 10: 3D Scene */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <Suspense fallback={<LoadingMission />}>
          <RocketScene 
            scrollProgress={smoothProgress} 
            velocityFactor={velocityFactor}
          />
        </Suspense>
      </div>

      {/* Layer 20: Hyper-Warp VFX */}
      <motion.div 
        style={{ opacity: warpOpacity }}
        className="fixed inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,242,255,0.25)_100%)] mix-blend-color-dodge"
      />

      <Navbar />
      <StickyBuyButton scrollProgress={scrollYProgress} />

      {/* Main Content UI */}
      <main className="relative z-50 w-full">
        <Hero scrollProgress={smoothProgress} />
        
        <div className="relative z-50 bg-[#020205]/40 backdrop-blur-[6px]">
          <About />
          <Tokenomics />
          <HowToBuy />
        </div>
      </main>

      <div className="relative z-[60]">
        <Footer />
      </div>
    </div>
  );
};

export default App;