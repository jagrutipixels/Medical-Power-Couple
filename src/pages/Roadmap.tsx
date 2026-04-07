import { motion } from 'motion/react';
import PageFooter from '../components/PageFooter';

export default function Roadmap() {
  const phases = [
    {
      id: "M1",
      title: "MONTH 1 - FOUNDATION",
      subtitle: "Build & Launch",
      items: [
        { title: "Optimise Instagram bio & highlights", desc: "Transform your profile into a high-converting landing page that instantly communicates authority." },
        { title: "Set up link-in-bio (Linktree)", desc: "Create a frictionless path for patients to book consultations and access resources." },
        { title: "Revamp LinkedIn company page", desc: "Establish a professional corporate presence for B2B networking and peer recognition." },
        { title: "Produce first 4 Reels", desc: "Launch high-quality, cinematic video content to capture immediate attention." },
        { title: "Convert 10 reviews to carousels", desc: "Leverage existing social proof into highly shareable, trust-building visual assets." },
        { title: "Start YouTube Shorts repurposing", desc: "Maximize content ROI by expanding reach across multiple algorithmic platforms." }
      ]
    },
    {
      id: "M2",
      title: "MONTH 2 - GROWTH",
      subtitle: "Scale & Test",
      items: [
        { title: "Run first paid Instagram campaign", desc: "Deploy targeted ad spend to amplify reach and attract high-intent local patients." },
        { title: "City-specific content per location", desc: "Hyper-localize messaging to dominate the Navi Mumbai healthcare search intent." },
        { title: "3 LinkedIn B2B case studies", desc: "Publish in-depth surgical successes to build authority among medical peers." },
        { title: "WhatsApp Status campaign launch", desc: "Activate your existing patient database for referrals and repeat consultations." },
        { title: "Track KPIs, double down on top format", desc: "Analyze data to identify winning content and scale what works best." },
        { title: "Collaborate with local lifestyle creator", desc: "Tap into established local audiences through strategic influencer partnerships." }
      ]
    },
    {
      id: "M3",
      title: "MONTH 3 - OPTIMISE",
      subtitle: "Convert & Retain",
      items: [
        { title: "Retargeting ads to warm audiences", desc: "Re-engage users who interacted with your content to drive final consultation bookings." },
        { title: "Seasonal campaign (Diwali / Moving)", desc: "Capitalize on cultural moments to stay top-of-mind and relevant." },
        { title: "Customer video testimonial series", desc: "Release powerful, emotional patient stories that serve as the ultimate social proof." },
        { title: "LinkedIn B2B awareness campaign", desc: "Expand professional network reach for hospital tie-ups and referral networks." },
        { title: "Full 90-day performance review", desc: "Comprehensive audit of growth, engagement, and patient acquisition metrics." },
        { title: "Q4 strategy planning", desc: "Map out the next phase of digital dominance based on proven data." }
      ]
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
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-med-glow" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-med-glow">
              08 - EXECUTION ROADMAP
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-med-white mb-6">
            90-Day Plan of Action
          </h2>
          <p className="text-lg md:text-xl font-light text-med-white/70 max-w-3xl leading-relaxed">
            A phased rollout — from foundation-building in Month 1 to full-throttle growth and conversion by Month 3.
          </p>
        </div>
        
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-med-glow/30 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Circle Indicator */}
                <div className="w-16 h-16 rounded-full border-2 border-med-glow bg-med-deep flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                  <span className="font-display font-bold text-xl text-med-white">{phase.id}</span>
                </div>
                
                <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-med-white/60 font-bold mb-4">
                  {phase.title}
                </h3>
                <h4 className="text-lg md:text-xl font-medium text-med-white mb-8">
                  {phase.subtitle}
                </h4>
                
                <ul className="space-y-6 w-full text-left">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-med-glow">{item.title}</span>
                      <span className="text-xs font-light text-med-white/60 leading-relaxed">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <PageFooter nextPath="/pricing" nextLabel="Investment Summary" />
    </section>
  );
}
