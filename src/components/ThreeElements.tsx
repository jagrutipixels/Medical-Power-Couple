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
  const count = viewport.width < 5 ? 20 : 40;
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
