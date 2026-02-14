
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 0.3], [0, -200]);
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.2], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center z-20 max-w-6xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-cyan-500/50" />
          <span className="text-cyan-400 font-orbitron text-[10px] font-bold tracking-[0.5em] uppercase">
            Protocol: Alpha-7
          </span>
          <div className="h-px w-12 bg-cyan-500/50" />
        </motion.div>

        <h1 className="font-orbitron font-black leading-[0.85] tracking-tighter mb-8">
          <motion.span 
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="block text-white text-[14vw] md:text-[10vw]"
          >
            DOGE-1
          </motion.span>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-[10vw] md:text-[7vw]"
          >
            THE MOON AWAITS
          </motion.div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light mb-14 tracking-wide leading-relaxed"
        >
          Join the first-ever lunar payload entirely funded by the community. 
          A historic leap for meme culture, humanity, and the Solana ecosystem.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(0, 242, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-4 bg-cyan-500 text-black font-orbitron font-black rounded-sm overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3 text-xs tracking-widest">
              INITIATE LAUNCH <Zap size={16} fill="currentColor" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
            />
          </motion.button>

          <button className="group relative px-10 py-4 bg-white/5 border border-white/10 text-white font-orbitron font-bold rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all">
            <span className="relative z-10 text-xs tracking-widest">MISSION DECK</span>
            <div className="absolute inset-0 bg-cyan-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
