import { ReactNode, useState, Suspense, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Home, Eye, User, Users, Table, BarChart3, ChevronRight, Map, IndianRupee } from 'lucide-react';
import Scene from './Scene';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/vision', label: 'The Vision', icon: Eye },
  { path: '/dr-vikas', label: 'Dr. Vikas Gupta', icon: User },
  { path: '/dr-rashmi', label: 'Dr. Rashmi Yadav', icon: User },
  { path: '/collaboration', label: 'Collaboration', icon: Table },
  { path: '/market-gap', label: 'Market Gap', icon: BarChart3 },
  { path: '/roadmap', label: 'Roadmap', icon: Map },
  { path: '/pricing', label: 'Pricing', icon: IndianRupee },
];

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative min-h-screen bg-med-deep text-med-white overflow-x-hidden selection:bg-med-glow selection:text-med-deep">
      {/* Persistent 3D Background */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-med-glow z-[80] origin-left shadow-[0_0_10px_rgba(0,245,255,0.5)]" 
        style={{ scaleX }} 
      />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 glass-med border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-med-glow flex items-center justify-center text-med-deep font-bold text-sm">
            S
          </div>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-med-glow"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 z-[70] w-full md:w-72 glass-med border-r border-white/10 transition-transform duration-500 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6 md:p-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-med-glow flex items-center justify-center text-med-deep font-bold text-xl">
                S
              </div>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 text-med-glow"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-grow space-y-1 md:space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center justify-between p-3 md:p-4 rounded-xl transition-all duration-300 group",
                  isActive 
                    ? "bg-med-glow text-med-deep font-bold shadow-[0_0_20px_rgba(0,245,255,0.3)]" 
                    : "hover:bg-white/5 text-med-white/60 hover:text-med-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className="md:w-5 md:h-5" />
                  <span className="text-[10px] md:text-sm uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={14} className={cn(
                  "transition-transform duration-300 md:w-4 md:h-4",
                  location.pathname === item.path ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-6 md:pt-8 border-t border-white/5">
            <button className="w-full py-3 md:py-4 bg-med-glow text-med-deep rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-med-glow/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
              Accept Proposal
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:pl-72 pt-20 lg:pt-0 min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-4 py-8 md:p-12 lg:p-20"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[65] bg-med-deep/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
