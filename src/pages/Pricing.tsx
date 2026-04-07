import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageFooter from '../components/PageFooter';

const pricingTiers = [
  {
    price: "45,000",
    label: "₹45k",
    value: 0,
    features: [
      {
        title: "Batch Shooting (1 Day)",
        desc: "All content for the month captured during 1 shoot day (8 hours) (₹20,000/day).",
        cost: "₹20,000"
      },
      {
        title: "Video Editing (11 Reels)",
        desc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹2,000/reel).",
        cost: "₹22,000"
      },
      {
        title: "Static & Carousel Posts",
        desc: "1 Carousel and 2 Static posts (₹1,000/post).",
        cost: "₹3,000"
      }
    ]
  },
  {
    price: "60,000",
    label: "₹60k",
    value: 33.33,
    features: [
      {
        title: "Batch Shooting (1 Day)",
        desc: "All content for the month captured during 1 shoot day (8 hours) (₹20,000/day).",
        cost: "₹20,000"
      },
      {
        title: "Video Editing (15 Reels)",
        desc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹2,000/reel).",
        cost: "₹30,000"
      },
      {
        title: "Static & Carousel Posts",
        desc: "4 Carousel and 6 Static posts (₹1,000/post).",
        cost: "₹10,000"
      }
    ]
  },
  {
    price: "75,000",
    label: "₹75k",
    value: 66.66,
    features: [
      {
        title: "Batch Shooting (2 Days)",
        desc: "All content for the month captured during 2 shoot days (8 hours/day) (₹20,000/day).",
        cost: "₹40,000"
      },
      {
        title: "Video Editing (14 Reels)",
        desc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹2,000/reel).",
        cost: "₹28,000"
      },
      {
        title: "Static & Carousel Posts",
        desc: "3 Carousel and 4 Static posts (₹1,000/post).",
        cost: "₹7,000"
      }
    ]
  },
  {
    price: "90,000",
    label: "₹90k",
    value: 100,
    features: [
      {
        title: "Batch Shooting (2 Days)",
        desc: "All content for the month captured during 2 shoot days (8 hours/day) (₹20,000/day).",
        cost: "₹40,000"
      },
      {
        title: "Video Editing (20 Reels)",
        desc: "A balanced mix of High-Quality cinematic reels and Raw/Light reels (₹2,000/reel).",
        cost: "₹40,000"
      },
      {
        title: "Static & Carousel Posts",
        desc: "5 Carousel and 5 Static posts (₹1,000/post).",
        cost: "₹10,000"
      }
    ]
  }
];

export default function Pricing() {
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const activeTier = pricingTiers[activeTierIndex];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-med-glow" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-med-glow">
              09 - INVESTMENT SUMMARY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-med-white mb-6">
            Transparent Monthly Pricing
          </h2>
          <p className="text-sm md:text-base font-light text-med-white/70 max-w-2xl leading-relaxed">
            Choose the plan that fits your goals and budget. All plans include a balanced mix of video and static content, plus weekly stories management. Drag the slider to explore each tier.
          </p>
        </div>
        
        <div className="bg-[#F8FAFC] rounded-3xl p-6 md:p-10 text-[#0F172A] shadow-2xl">
          
          {/* Slider Section */}
          <div className="mb-12">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#8B5CF6] mb-8">
              Customize Your Monthly Content Plan
            </h3>
            
            <div className="relative max-w-3xl mx-auto px-4">
              {/* Custom Slider Track */}
              <div className="h-2 bg-gray-200 rounded-full relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#8B5CF6] rounded-full"
                  animate={{ width: `${activeTier.value}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              
              {/* Slider Input (Invisible, for interaction) */}
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1"
                value={activeTierIndex}
                onChange={(e) => setActiveTierIndex(parseInt(e.target.value))}
                className="absolute top-0 left-4 right-4 h-2 w-[calc(100%-2rem)] opacity-0 cursor-pointer z-20"
              />
              
              {/* Labels */}
              <div className="flex justify-between mt-4 text-xs font-medium text-gray-400">
                {pricingTiers.map((tier, idx) => (
                  <span 
                    key={idx} 
                    className={`cursor-pointer transition-colors ${activeTierIndex === idx ? 'text-[#8B5CF6] font-bold' : 'hover:text-gray-600'}`}
                    onClick={() => setActiveTierIndex(idx)}
                  >
                    {tier.label}
                  </span>
                ))}
              </div>
              
              {/* Custom Thumb */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#8B5CF6] rounded-full shadow-md border-2 border-white pointer-events-none z-10"
                animate={{ left: `calc(${activeTier.value}% + 1rem - (${activeTier.value} / 100 * 2rem))` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ marginLeft: '-10px' }}
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTierIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTier.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-t border-gray-200 gap-4">
                    <div>
                      <h4 className="font-bold text-sm md:text-base mb-1">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500 font-light">{feature.desc}</p>
                    </div>
                    <div className="text-[#8B5CF6] font-bold text-sm md:text-base whitespace-nowrap">
                      {feature.cost}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Static Features */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-t border-gray-200 gap-4">
              <div>
                <h4 className="font-bold text-sm md:text-base mb-1">Weekly Stories Management</h4>
                <p className="text-xs md:text-sm text-gray-500 font-light">4-5 weekly stories using behind-the-scenes content and engagement polls.</p>
              </div>
              <div className="text-[#8B5CF6] font-bold text-sm md:text-base whitespace-nowrap">
                Complimentary
              </div>
            </div>

            <div className="py-6 border-t border-gray-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">Payment Terms</h4>
              <p className="text-xs md:text-sm text-gray-500 font-light">
                60% advance payment required to confirm booking and initiate execution. Remaining 40% to be completed as per the agreed cycle.
              </p>
            </div>
          </div>

          {/* Total & CTA */}
          <div className="mt-4 bg-[#1E1B4B] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Total Monthly Investment</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-5xl font-bold tracking-tight">₹{activeTier.price}</span>
                <span className="text-lg md:text-xl font-light text-gray-400">/ month</span>
              </div>
            </div>
            <a href="https://www.ssbykmw.com/register-form" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#A855F7] hover:bg-[#9333EA] text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
              Contact Us <ArrowRight size={16} />
            </a>
          </div>
          
          <p className="text-center text-[10px] md:text-xs text-gray-400 mt-6 max-w-3xl mx-auto">
            <span className="text-[#8B5CF6] font-bold">* Note:</span> Meta Ad & Google Ad budgets are not included in the above pricing. If you choose to run paid ads, the ad spend will be billed separately on actuals.
          </p>

          {/* Value Proposition Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-center text-xl md:text-2xl font-display font-bold text-[#0F172A] mb-8">
              What You're Really Investing In
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8B5CF6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h4 className="font-bold text-sm mb-2">Predictable Patient Flow</h4>
                <p className="text-xs text-gray-500 leading-relaxed">A system designed to consistently attract high-value patients, reducing reliance on word-of-mouth alone.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8B5CF6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h4 className="font-bold text-sm mb-2">Time Freedom</h4>
                <p className="text-xs text-gray-500 leading-relaxed">We handle the entire digital ecosystem—from ideation to editing to posting—so you can focus entirely on surgery and patient care.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8B5CF6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h4 className="font-bold text-sm mb-2">Premium Positioning</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Elevate your perceived value in the market. Premium branding justifies premium pricing and attracts a better demographic.</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
      
      <PageFooter nextPath="/" nextLabel="Back to Home" />
    </section>
  );
}
