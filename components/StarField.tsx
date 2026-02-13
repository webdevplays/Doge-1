
import React, { useMemo } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface StarFieldProps {
    scrollProgress: MotionValue<number>;
}

const StarField: React.FC<StarFieldProps> = ({ scrollProgress }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      duration: Math.random() * 4 + 3,
      layer: Math.floor(Math.random() * 3) + 1, // Parallax depth layer
    }));
  }, []);

  const y1 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -1000]);

  const layers = [y1, y2, y3];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020205]">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            y: layers[star.layer - 1],
          }}
          className="absolute"
        >
            <motion.div
                initial={{ opacity: star.opacity }}
                animate={{ opacity: [star.opacity, 0.1, star.opacity] }}
                transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="bg-white rounded-full"
                style={{
                    left: `${star.x}vw`,
                    top: `${star.y}vh`,
                    width: star.size,
                    height: star.size,
                    boxShadow: star.size > 1 ? `0 0 ${star.size * 4}px white` : 'none',
                }}
            />
        </motion.div>
      ))}

      {/* Cinematic Nebulas */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-40 pointer-events-none"
      >
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-purple-900/10 blur-[200px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[200px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[30%] w-[40%] h-[40%] bg-blue-900/10 blur-[180px] rounded-full mix-blend-screen" />
      </motion.div>

      {/* Atmospheric Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205] opacity-50" />
    </div>
  );
};

export default StarField;
