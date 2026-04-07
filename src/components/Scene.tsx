import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { DNAHelix, FloatingCells, MedicalInstruments } from './ThreeElements';

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#185ADB" />
          
          <DNAHelix />
          <FloatingCells />
          <MedicalInstruments />
          
          <EffectComposer>
            <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
