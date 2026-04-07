import { motion } from 'motion/react';
import PageFooter from '../components/PageFooter';

export default function Home() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-med-glow uppercase text-[10px] md:text-xs font-bold mb-6 md:mb-8 block text-glow-teal px-4"
        >
          Exclusive Proposal for Dr. Vikas Gupta & Dr. Rashmi Yadav
        </motion.span>
        
        <h1 className="text-4xl md:text-[8vw] font-display leading-[1.1] md:leading-[0.9] tracking-tight mb-8 md:mb-12">
          The Medical <span className="italic block text-med-glow">Power Couple</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-med-white/70 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed px-4">
          Dominating Navi Mumbai’s Healthcare Space. An End-to-End Digital Authority & Personal Branding System by Savoir Studio.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-8 md:mt-16">
          <div className="flex flex-col items-center gap-2">
            <span className="text-med-white/40 text-[8px] md:text-[10px] uppercase tracking-widest">Concept</span>
            <span className="text-lg md:text-xl font-light italic">Vashi's Premier Care Hub</span>
          </div>
          <div className="w-12 md:w-px h-px md:h-12 bg-med-glow/30" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-med-white/40 text-[8px] md:text-[10px] uppercase tracking-widest">Prepared By</span>
            <span className="text-lg md:text-xl font-light italic">Abhishek Gujar</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 p-8 md:p-12 glass-med rounded-[30px] text-left max-w-4xl mx-auto border-l-4 border-l-med-glow"
        >
          <h3 className="text-xl md:text-2xl font-display italic text-med-white mb-4">The Opportunity</h3>
          <p className="text-sm md:text-base font-light text-med-white/70 leading-relaxed">
            Patients no longer choose doctors based solely on hospital affiliations; they choose based on digital trust. By combining Dr. Vikas's surgical mastery with Dr. Rashmi's empathetic nephrology care, we have the unique opportunity to build a multi-disciplinary digital brand that commands authority, educates the masses, and directly drives high-value patient acquisition in Navi Mumbai.
          </p>
        </motion.div>
      </motion.div>
      
      <div className="w-full mt-16 md:mt-20">
        <PageFooter nextPath="/vision" nextLabel="The Vision" />
      </div>
    </section>
  );
}
