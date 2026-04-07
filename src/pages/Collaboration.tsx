import { motion } from 'motion/react';
import PageFooter from '../components/PageFooter';

export default function Collaboration() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-8 md:p-16 glass-med rounded-[30px] md:rounded-[60px] text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-med-glow text-glow-teal mb-6 md:mb-8 block">
          Section 05
        </span>
        <h2 className="text-4xl md:text-7xl font-display italic tracking-tight text-med-white mb-8 md:mb-12">
          The Collaboration: <span className="text-med-glow block">The Specialist’s Table</span>
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8 text-lg md:text-xl font-light text-med-white/70 leading-relaxed max-w-3xl mx-auto">
          <p>
            Highlighting the "Cross-Pollination" content pillar. Joint content discussing how systemic health issues and lifestyle choices simultaneously impact both kidney function and cancer risk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-med-glow font-bold text-sm uppercase tracking-widest mb-3">The Multiplier Effect</h4>
              <p className="text-sm text-med-white/60">Shared reels, joint Q&A sessions, and cross-tagging double your reach without doubling the ad spend. A patient coming for a routine checkup with Dr. Rashmi discovers Dr. Vikas's surgical expertise for their family member.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-med-glow font-bold text-sm uppercase tracking-widest mb-3">Holistic Authority</h4>
              <p className="text-sm text-med-white/60">Patients don't just see two separate specialists; they see a comprehensive, high-end medical ecosystem operating out of JK Chambers. This builds a unique, impenetrable moat against local competitors.</p>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-med-glow/5 border border-med-glow/20 rounded-2xl md:rounded-3xl text-med-glow font-bold italic text-xl md:text-2xl mt-4">
            "A category of one in the Indian medical space."
          </div>
        </div>
      </motion.div>
      
      <PageFooter nextPath="/market-gap" nextLabel="Market Gap" />
    </section>
  );
}
