/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useProgress } from '@react-three/drei';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vision from './pages/Vision';
import ProfileVikas from './pages/ProfileVikas';
import ProfileRashmi from './pages/ProfileRashmi';
import Collaboration from './pages/Collaboration';
import MarketGap from './pages/MarketGap';
import Roadmap from './pages/Roadmap';
import Pricing from './pages/Pricing';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const { active, progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fallback timer in case progress doesn't reach 100 or active stays true
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 5000);

    if (!active && progress === 100) {
      clearTimeout(fallbackTimer);
      const timer = setTimeout(() => setIsReady(true), 1000);
      return () => clearTimeout(timer);
    }

    return () => clearTimeout(fallbackTimer);
  }, [active, progress]);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {!isReady && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <div className={isReady ? "opacity-100" : "opacity-0 pointer-events-none"}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/dr-vikas" element={<ProfileVikas />} />
            <Route path="/dr-rashmi" element={<ProfileRashmi />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/market-gap" element={<MarketGap />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
