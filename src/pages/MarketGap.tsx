import { motion } from 'motion/react';
import { Shield, Zap, Users } from 'lucide-react';
import PageFooter from '../components/PageFooter';

export default function MarketGap() {
  const cards = [
    {
      title: "The Institutional Giants",
      description: "High budget, but cold, faceless, and clinical.",
      edge: "Human, intimate, trust-building storytelling.",
      icon: Shield
    },
    {
      title: "Local Competitors",
      description: "Low-quality phone footage, fragmented digital presence.",
      edge: "Studio-grade cinematic lighting that subconsciously communicates premium medical care.",
      icon: Zap
    },
    {
      title: "General Medical Influencers",
      description: "High engagement, low specialized credentials.",
      edge: "Influencer-grade reach with world-class surgical authority.",
      icon: Users
    }
  ];

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
              Section 06
            </span>
            <h2 className="text-4xl md:text-8xl font-display italic tracking-tight text-med-white">
              The Market <span className="text-med-glow">Gap.</span>
            </h2>
          </div>
          <div className="w-16 md:w-24 h-px mt-4 md:mt-12 bg-med-glow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col p-8 md:p-10 glass-med rounded-[30px] md:rounded-[40px] hover:border-med-glow/50 transition-all duration-500 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-med-glow/10 flex items-center justify-center text-med-glow mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <card.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-display italic text-med-white mb-4">{card.title}</h3>
              <p className="text-sm text-med-white/40 leading-relaxed mb-6 md:mb-8">{card.description}</p>
              <div className="mt-auto pt-6 md:pt-8 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-med-glow font-bold mb-2 block">Savoir Edge</span>
                <p className="text-sm font-light text-med-white/80 italic">{card.edge}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-8 md:p-12 bg-med-glow/5 border border-med-glow/20 rounded-[30px] text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display italic text-med-white mb-4">The First-Mover Advantage</h3>
          <p className="text-base md:text-lg font-light text-med-white/70 leading-relaxed">
            Navi Mumbai's healthcare digital space is currently fragmented. By moving decisively now, you don't just compete—you set the standard. The cost of inaction is allowing generic competitors to capture the high-intent patients actively searching for your expertise online.
          </p>
        </motion.div>
      </motion.div>
      
      <PageFooter nextPath="/roadmap" nextLabel="Execution Roadmap" />
    </section>
  );
}
