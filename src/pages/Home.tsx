import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
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
          className="mt-24 relative group max-w-4xl mx-auto"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-med-glow/5 rounded-[30px] blur-2xl group-hover:bg-med-glow/15 transition-colors duration-700" />
          
          <div className="relative p-8 md:p-12 bg-[#0A1128]/80 backdrop-blur-xl rounded-[30px] text-left overflow-hidden border border-white/10 hover:border-med-glow/30 transition-colors duration-500 shadow-2xl">
            {/* Glowing left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-med-glow via-med-glow/80 to-transparent shadow-[0_0_20px_rgba(0,245,255,1)]" />
            
            {/* Top right decorative element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-med-glow/10 rounded-full blur-2xl" />
            
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
              <div className="hidden md:flex mt-2 w-14 h-14 rounded-2xl bg-med-glow/10 items-center justify-center shrink-0 border border-med-glow/20 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                <Sparkles className="text-med-glow w-7 h-7" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-display italic text-med-white mb-4 flex items-center gap-3">
                  The Opportunity
                  <Sparkles className="text-med-glow w-5 h-5 md:hidden" />
                </h3>
                <p className="text-base md:text-lg font-light text-med-white/80 leading-relaxed">
                  Patients no longer choose doctors based solely on hospital affiliations; they choose based on <span className="text-med-glow font-medium">digital trust</span>. By combining Dr. Vikas's surgical mastery with Dr. Rashmi's empathetic nephrology care, we have the unique opportunity to build a multi-disciplinary digital brand that <span className="text-white font-medium">commands authority, educates the masses, and directly drives high-value patient acquisition</span> in Navi Mumbai.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="w-full mt-16 md:mt-20">
        <PageFooter nextPath="/vision" nextLabel="The Vision" />
      </div>
    </section>
  );
}
