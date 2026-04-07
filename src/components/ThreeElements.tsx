import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function DNAHelix() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const numBasePairs = 20;
  const radius = viewport.width < 5 ? 1.2 : 2;
  const height = viewport.height < 10 ? 8 : 10;
  const twist = Math.PI * 2;

  const basePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < numBasePairs; i++) {
      const y = (i / numBasePairs) * height - height / 2;
      const angle = (i / numBasePairs) * twist;
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      pairs.push({ p1: [x1, y, z1], p2: [x2, y, z2] });
    }
    return pairs;
  }, [radius, height]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      // Move to the right on desktop, center on mobile
      groupRef.current.position.x = viewport.width < 5 ? 0 : 3;
    }
  });

  return (
    <group ref={groupRef}>
      {basePairs.map((pair, i) => (
        <group key={i}>
          {/* Backbone 1 */}
          <Sphere position={pair.p1 as any} args={[0.08, 16, 16]}>
            <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={2} />
          </Sphere>
          {/* Backbone 2 */}
          <Sphere position={pair.p2 as any} args={[0.08, 16, 16]}>
            <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={2} />
          </Sphere>
          {/* Connecting bar */}
          <mesh position={[(pair.p1[0] + pair.p2[0]) / 2, pair.p1[1], (pair.p1[2] + pair.p2[2]) / 2] as any}>
            <boxGeometry args={[radius * 2, 0.015, 0.015]} />
            <meshStandardMaterial color="#185ADB" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function FloatingCells() {
  const { viewport } = useThree();
  const count = viewport.width < 5 ? 15 : 25; // Reduced count to make room for instruments
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2,
          (Math.random() - 0.5) * 10,
        ],
        speed: Math.random() * 0.02 + 0.01,
        factor: Math.random() * 10,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  return (
    <>
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed * 100} rotationIntensity={1} floatIntensity={1}>
          <Sphere position={p.position as any} args={[0.04, 16, 16]}>
            <MeshDistortMaterial
              color="#185ADB"
              speed={2}
              distort={0.3}
              radius={1}
              emissive="#00F5FF"
              emissiveIntensity={0.1}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

export function MedicalCross({ position, scale = 1, color = "#00F5FF" }: any) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <group position={position} scale={scale}>
        <mesh>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.8, 0.2, 0.2]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export function PillCapsule({ position, scale = 1, color1 = "#00F5FF", color2 = "#185ADB" }: any) {
  return (
    <Float speed={3} rotationIntensity={3} floatIntensity={2}>
      <group position={position} scale={scale}>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.5, 16]} />
          <meshStandardMaterial color={color1} emissive={color1} emissiveIntensity={0.2} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={color1} emissive={color1} emissiveIntensity={0.2} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.5, 16]} />
          <meshStandardMaterial color={color2} emissive={color2} emissiveIntensity={0.2} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={color2} emissive={color2} emissiveIntensity={0.2} transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

export function Syringe({ position, scale = 1, color = "#00F5FF" }: any) {
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
      <group position={position} scale={scale} rotation={[0, 0, Math.PI / 4]}>
        {/* Barrel */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.2} roughness={0.1} metalness={0.8} />
        </mesh>
        {/* Plunger */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, 1.0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
        </mesh>
        {/* Needle base */}
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[0.08, 0.15, 0.1, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
        {/* Needle */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4, 8]} />
          <meshStandardMaterial color="#aaaaaa" metalness={1} roughness={0} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export function MedicalInstruments() {
  const { viewport } = useThree();
  
  // Scatter these around the scene
  const instruments = useMemo(() => {
    const items = [];
    const count = viewport.width < 5 ? 10 : 20;
    
    for (let i = 0; i < count; i++) {
      const type = Math.floor(Math.random() * 3); // 0: Cross, 1: Pill, 2: Syringe
      items.push({
        type,
        position: [
          (Math.random() - 0.5) * viewport.width * 1.5,
          (Math.random() - 0.5) * viewport.height * 1.5,
          (Math.random() - 0.5) * 8 - 2, // Push slightly back
        ],
        scale: Math.random() * 0.4 + 0.3, // Keep them relatively small
      });
    }
    return items;
  }, [viewport.width, viewport.height]);

  return (
    <>
      {instruments.map((inst, i) => {
        if (inst.type === 0) return <MedicalCross key={`cross-${i}`} position={inst.position} scale={inst.scale} />;
        if (inst.type === 1) return <PillCapsule key={`pill-${i}`} position={inst.position} scale={inst.scale} />;
        return <Syringe key={`syringe-${i}`} position={inst.position} scale={inst.scale} />;
      })}
    </>
  );
}
