import { motion } from 'motion/react';
import PageFooter from '../components/PageFooter';

export default function Roadmap() {
  const phases = [
    {
      id: "M1",
      title: "MONTH 1 - FOUNDATION",
      subtitle: "Establish the Premium Standard",
      items: [
        { title: "Studio-Grade Brand Overhaul", desc: "Replace fragmented, low-quality presence with cohesive, cinematic branding across all platforms to signal premium care." },
        { title: "Launch 'The Power Couple' Narrative", desc: "Introduce the human-centric, intimate storytelling that cold institutional giants completely lack." },
        { title: "Authority-First Profile Optimization", desc: "Restructure Instagram and LinkedIn to instantly communicate world-class surgical and nephrology credentials." },
        { title: "Produce First 4 Cinematic Reels", desc: "Differentiate immediately from local competitors using high-end, studio-grade video production." },
        { title: "Deploy Frictionless Booking Funnels", desc: "Set up optimized Linktree and WhatsApp flows to capture high-intent patients effortlessly." },
        { title: "Convert Reviews to Visual Proof", desc: "Leverage existing patient trust into highly shareable, premium carousel assets." }
      ]
    },
    {
      id: "M2",
      title: "MONTH 2 - GROWTH",
      subtitle: "Amplify & Capture Market Share",
      items: [
        { title: "Hyper-Local Navi Mumbai Campaigns", desc: "Capitalize on the first-mover advantage by targeting high-intent local healthcare searches." },
        { title: "Publish Clinical Case Studies (B2B)", desc: "Counter general influencers by showcasing deep, specialized surgical successes on LinkedIn." },
        { title: "Human-Centric Paid Ad Rollout", desc: "Deploy targeted ad spend using intimate storytelling to outmaneuver cold corporate hospital marketing." },
        { title: "Patient Journey Video Series", desc: "Release content that builds parasocial relationships and deep trust before patients even visit the clinic." },
        { title: "Activate WhatsApp Referral Network", desc: "Turn the existing patient database into a community-driven, high-trust growth engine." },
        { title: "Cross-Platform Authority Syndication", desc: "Expand the cinematic content reach to YouTube Shorts to dominate multiple algorithms." }
      ]
    },
    {
      id: "M3",
      title: "MONTH 3 - DOMINATE",
      subtitle: "Solidify the Gold Standard",
      items: [
        { title: "Authority-Building Retargeting Ads", desc: "Re-engage warm audiences with undeniable credentials to drive final, high-value consultation bookings." },
        { title: "Release Cinematic Testimonial Series", desc: "Deploy emotional, high-production patient stories as the ultimate social proof against faceless giants." },
        { title: "B2B Hospital Tie-Up Outreach", desc: "Expand professional network reach leveraging the newly established 'Power Couple' digital authority." },
        { title: "Data-Driven Content Scaling", desc: "Analyze engagement metrics to double down on the formats driving the highest-value patient acquisition." },
        { title: "Full 90-Day Market Impact Review", desc: "Comprehensive audit of local market penetration and patient acquisition costs." },
        { title: "Phase 2 'Gold Standard' Planning", desc: "Map out the next phase of digital dominance to ensure local competitors cannot catch up." }
      ]
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
            A phased rollout designed specifically to exploit the market gaps—moving from foundation-building to absolute digital dominance in Navi Mumbai.
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
                <div className="w-16 h-16 rounded-full border-2 border-med-glow bg-[#0A1128] flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
                  <span className="font-display font-bold text-xl text-med-white">{phase.id}</span>
                </div>
                
                <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-med-glow font-bold mb-4">
                  {phase.title}
                </h3>
                <h4 className="text-lg md:text-xl font-medium text-med-white mb-8">
                  {phase.subtitle}
                </h4>
                
                <ul className="space-y-6 w-full text-left">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-med-glow/30 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-sm font-bold text-med-glow">{item.title}</span>
                      <span className="text-xs font-light text-med-white/70 leading-relaxed">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <div className="w-full mt-16 md:mt-24">
        <PageFooter nextPath="/pricing" nextLabel="Investment Summary" />
      </div>
    </section>
  );
}
