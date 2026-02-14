
import React, { Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import StarField from './components/StarField';
import RocketScene from './components/RocketScene';

const LoadingMission = () => (
  <div className="absolute inset-0 z-50 bg-[#020205]/50 backdrop-blur-sm flex flex-col items-center justify-center">
    <div className="relative w-16 h-16 mb-4">
      <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-full" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 border-t-cyan-500 rounded-full"
      />
    </div>
    <span className="font-orbitron text-[10px] text-cyan-400 font-bold tracking-[0.4em] animate-pulse">
      LINKING PAYLOAD...
    </span>
  </div>
);

const App: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });
  const velocityFactor = useTransform(smoothVelocity, [-3000, 3000], [-5, 5], { clamp: false });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Cinematic "Warp" visual effect based on velocity
  const warpOpacity = useTransform(smoothVelocity, [1000, 3000], [0, 0.4]);

  return (
    <div className="relative bg-[#020205] min-h-screen selection:bg-cyan-500/30">
      {/* Background Layer - Always visible */}
      <div className="fixed inset-0 z-0 bg-[#020205]">
        <StarField scrollProgress={smoothProgress} />
      </div>

      {/* 3D Scene Layer - Suspended independently */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <Suspense fallback={<LoadingMission />}>
          <RocketScene 
            scrollProgress={smoothProgress} 
            velocityFactor={velocityFactor}
          />
        </Suspense>
      </div>

      {/* Cinematic Warp Streaks Overlay */}
      <motion.div 
        style={{ opacity: warpOpacity }}
        className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,242,255,0.1)_100%)]"
      />

      {/* UI Layer - Renders immediately */}
      <Navbar />

      <main className="relative z-20 w-full">
        <Hero scrollProgress={smoothProgress} />
        <About />
        <Tokenomics />
        <HowToBuy />
      </main>

      <Footer />
    </div>
  );
};

export default App;
