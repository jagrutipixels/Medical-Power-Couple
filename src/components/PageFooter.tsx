import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PageFooterProps {
  nextPath: string;
  nextLabel: string;
}

export default function PageFooter({ nextPath, nextLabel }: PageFooterProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex justify-end"
    >
      <Link 
        to={nextPath}
        className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 glass-med rounded-xl md:rounded-2xl hover:border-med-glow/50 transition-all duration-300 w-full md:w-auto"
      >
        <div className="text-right flex-grow md:flex-grow-0">
          <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-med-white/40 block mb-1">Next Section</span>
          <span className="text-lg md:text-xl font-display italic text-med-white group-hover:text-med-glow transition-colors">{nextLabel}</span>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-med-glow flex items-center justify-center text-med-deep group-hover:scale-110 transition-transform">
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </div>
      </Link>
    </motion.div>
  );
}
