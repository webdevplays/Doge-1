
import React, { Suspense, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import StarField from './components/StarField';
import RocketScene from './components/RocketScene';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    <div ref={containerRef} className="relative bg-[#020205] min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <StarField scrollProgress={smoothProgress} />
      
      {/* Cinematic Warp Streaks Overlay */}
      <motion.div 
        style={{ opacity: warpOpacity }}
        className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,242,255,0.1)_100%)]"
      />

      <div className="fixed inset-0 pointer-events-none z-10">
        <Suspense fallback={null}>
          <RocketScene 
            scrollProgress={smoothProgress} 
            velocityFactor={velocityFactor}
          />
        </Suspense>
      </div>

      <Navbar />

      <main className="relative z-20">
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
