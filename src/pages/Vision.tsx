import { motion } from 'motion/react';
import { Shield, Users } from 'lucide-react';
import PageFooter from '../components/PageFooter';

export default function Vision() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-med-glow text-glow-teal">
              Section 02
            </span>
            <h2 className="text-4xl md:text-8xl font-display italic tracking-tight text-med-white">
              The Vision: Why <span className="text-med-glow">"The Power Couple"?</span>
            </h2>
          </div>
          <div className="w-16 md:w-24 h-px mt-4 md:mt-12 bg-med-glow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <p className="text-xl md:text-4xl font-light text-med-white/80 leading-relaxed italic">
            Operating out of JK Chambers in Vashi, the true strength lies in a unified digital front. We are bridging high-tech surgical precision with deep empathetic care. 
          </p>
          <div className="flex flex-col gap-8">
            <p className="text-lg md:text-xl font-light text-med-white/60 leading-relaxed">
              Moving away from cold, institutional marketing to human, trust-driven medical authority. Our strategy focuses on personal branding that resonates with the patients of Navi Mumbai.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 glass-med rounded-2xl border border-white/5 hover:border-med-glow/30 transition-colors">
                <Shield className="text-med-glow mb-4" size={24} />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Authority</h3>
                <p className="text-xs text-med-white/60 leading-relaxed">Positioning you not just as doctors, but as the definitive medical thought leaders in Navi Mumbai. We showcase your surgical mastery, complex case studies, and industry insights to build undeniable credibility.</p>
              </div>
              <div className="p-6 glass-med rounded-2xl border border-white/5 hover:border-med-glow/30 transition-colors">
                <Users className="text-med-glow mb-4" size={24} />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Empathy</h3>
                <p className="text-xs text-med-white/60 leading-relaxed">Bridging the gap between complex medical jargon and human-centric care. We focus on patient triumphs, holistic well-being, and approachability to make high-end healthcare feel accessible and reassuring.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <PageFooter nextPath="/dr-vikas" nextLabel="Dr. Vikas Gupta" />
    </section>
  );
}
