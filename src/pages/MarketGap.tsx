import { motion } from 'motion/react';
import { Shield, Zap, Users, Target } from 'lucide-react';
import PageFooter from '../components/PageFooter';

export default function MarketGap() {
  const cards = [
    {
      title: "The Institutional Giants",
      description: "Corporate hospitals dominate search results with massive marketing budgets, but their approach is inherently cold, faceless, and clinical. Patients often feel like mere numbers in a system, leading to high friction in the decision-making process.",
      edge: "Human-centric, intimate storytelling that builds a parasocial relationship and deep trust before the patient even steps into the clinic.",
      icon: Shield
    },
    {
      title: "Local Competitors",
      description: "Independent clinics in Navi Mumbai are attempting digital marketing, but rely on low-quality phone footage, inconsistent branding, and fragmented messaging. To a high-ticket patient, a cheap digital presence subconsciously signals compromised medical quality.",
      edge: "Studio-grade cinematic production and cohesive branding that subconsciously communicates premium, world-class medical care.",
      icon: Zap
    },
    {
      title: "General Medical Influencers",
      description: "The internet is flooded with general practitioners creating high-engagement 'infotainment' content, but they lack the deep, specialized credentials required for complex surgical and nephrology cases.",
      edge: "Influencer-grade reach and engagement mechanics, backed by undeniable, world-class surgical and nephrological authority.",
      icon: Users
    }
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-4 md:px-0">
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
          <div className="w-16 md:w-24 h-px mt-4 md:mt-12 bg-med-glow shadow-[0_0_15px_rgba(0,245,255,0.8)]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col p-8 md:p-10 bg-[#0A1128]/60 backdrop-blur-lg rounded-[30px] md:rounded-[40px] border border-white/5 hover:border-med-glow/40 hover:bg-[#0A1128]/80 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] relative overflow-hidden"
            >
              {/* Subtle top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-med-glow/0 to-transparent group-hover:via-med-glow/50 transition-all duration-700" />
              
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-med-glow/10 flex items-center justify-center text-med-glow mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-med-glow/20 transition-all duration-500 border border-med-glow/20">
                <card.icon size={24} className="md:w-8 md:h-8" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-display italic text-med-white mb-4 group-hover:text-med-glow transition-colors duration-300">{card.title}</h3>
              
              <p className="text-sm md:text-base text-med-white/60 leading-relaxed mb-8 md:mb-12 flex-grow">
                {card.description}
              </p>
              
              <div className="mt-auto pt-6 md:pt-8 border-t border-white/10 relative">
                <div className="absolute top-0 left-0 w-12 h-px bg-med-glow/50" />
                <span className="text-[10px] uppercase tracking-widest text-med-glow font-bold mb-3 block flex items-center gap-2">
                  <Target size={12} />
                  Savoir Edge
                </span>
                <p className="text-sm md:text-base font-light text-med-white/90 italic leading-relaxed">
                  {card.edge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative p-8 md:p-12 bg-[#0A1128]/80 backdrop-blur-xl border border-med-glow/30 rounded-[30px] text-left max-w-5xl mx-auto overflow-hidden group shadow-[0_0_40px_rgba(0,245,255,0.1)]"
        >
          {/* Background glow effect */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-med-glow/10 rounded-full blur-3xl group-hover:bg-med-glow/20 transition-colors duration-700" />
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-med-glow via-med-glow/50 to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="hidden md:flex w-16 h-16 rounded-full bg-med-glow/10 items-center justify-center shrink-0 border border-med-glow/30">
              <Zap className="text-med-glow w-8 h-8" />
            </div>
            
            <div>
              <h3 className="text-2xl md:text-4xl font-display italic text-med-white mb-6">
                The First-Mover <span className="text-med-glow">Advantage</span>
              </h3>
              <p className="text-base md:text-lg font-light text-med-white/80 leading-relaxed mb-6">
                The premium healthcare digital space in Navi Mumbai is currently fragmented and ripe for disruption. High-intent patients are actively searching for specialized care, but no single entity has claimed the absolute digital authority position. 
              </p>
              <p className="text-base md:text-lg font-light text-med-white/80 leading-relaxed">
                By moving decisively now with a unified "Power Couple" brand, you don't just compete—<span className="text-med-glow font-medium">you set the gold standard</span>. The cost of inaction is allowing generic, less-qualified competitors to capture the attention and loyalty of your ideal patient demographic.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="w-full mt-16 md:mt-24">
        <PageFooter nextPath="/roadmap" nextLabel="Execution Roadmap" />
      </div>
    </section>
  );
}
