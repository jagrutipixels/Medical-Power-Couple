import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress(prev => {
        if (prev < progress) return Math.min(prev + 1, progress);
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-med-deep flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow-gradient opacity-30" />
      
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-12">
        {/* Pulsing Rings */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-med-glow/30"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-med-glow/20"
        />
        
        {/* Central Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-med-glow flex items-center justify-center text-med-deep font-bold text-2xl md:text-3xl shadow-[0_0_40px_rgba(0,245,255,0.4)]"
          >
            S
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center relative z-10"
      >
        <h2 className="text-med-white font-display italic text-2xl md:text-3xl tracking-widest mb-4">Savoir Studio</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-med-glow font-bold text-glow-teal">
              {active ? "Initializing 3D Assets" : "Ready to Experience"}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-med-glow"
            />
          </div>
          
          <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-0 left-0 h-full bg-med-glow shadow-[0_0_15px_rgba(0,245,255,0.6)]"
            />
          </div>
          
          <span className="text-[10px] font-mono text-med-white/30 tracking-widest">
            {Math.round(displayProgress)}%
          </span>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="flex flex-col gap-2">
          <div className="w-12 h-px bg-med-glow/30" />
          <span className="text-[8px] uppercase tracking-widest text-med-white/20">Abhishek Gujar</span>
        </div>
      </div>
    </motion.div>
  );
}
