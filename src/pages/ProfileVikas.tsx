import { motion } from 'motion/react';
import PageFooter from '../components/PageFooter';

export default function ProfileVikas() {
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
              Profile 01
            </span>
            <h2 className="text-4xl md:text-8xl font-display italic tracking-tight text-med-white">
              Dr. Vikas <span className="text-med-glow">Gupta.</span>
            </h2>
          </div>
          <div className="w-16 md:w-24 h-px mt-4 md:mt-12 bg-med-glow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col p-8 md:p-12 glass-med rounded-[30px] md:rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-med-glow/10 blur-3xl group-hover:bg-med-glow/20 transition-colors" />
            <span className="text-med-glow font-mono text-[10px] uppercase tracking-widest mb-4 md:mb-6 block">Surgical Oncologist</span>
            <h3 className="text-3xl md:text-5xl font-display italic mb-4">Demystifying the Tech</h3>
            <p className="text-base md:text-lg font-light text-med-white/70 leading-relaxed mb-6 md:mb-8">
              Bringing ~15 years of surgical excellence to the digital forefront. Focusing on high-ticket, advanced procedures like Robotic-Assisted Cancer Surgery and VATS. 
            </p>
            <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/5 italic text-xs md:text-sm text-med-white/60 leading-relaxed">
              "The content strategy revolves around alleviating patient fear of traditional surgeries by visually demonstrating the precision, reduced pain, and faster recovery of robotic treatments."
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <h4 className="text-xl md:text-2xl font-display italic text-med-glow">Key Content Pillars</h4>
            <ul className="space-y-6 md:space-y-8">
              {[
                { title: "Surgical Mastery & Innovation", desc: "Behind-the-scenes looks at Robotic Precision vs. Traditional Surgery, establishing you as the leading authority in advanced oncology." },
                { title: "Patient Triumphs (VATS)", desc: "Documenting the faster recovery and reduced pain of VATS procedures through emotional, real-world patient journeys." },
                { title: "Thought Leadership", desc: "Industry insights, myth-busting common cancer misconceptions, and explaining complex procedures in simple terms." },
                { title: "Vashi's Surgical Excellence", desc: "Positioning JK Chambers as the premier destination for high-end surgical care in Navi Mumbai." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 text-med-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-med-glow mt-2 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base md:text-lg font-medium text-med-white">{item.title}</span>
                    <span className="text-xs md:text-sm font-light leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      <PageFooter nextPath="/dr-rashmi" nextLabel="Dr. Rashmi Yadav" />
    </section>
  );
}
