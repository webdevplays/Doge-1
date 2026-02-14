// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, Environment, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

interface RocketSceneProps {
  scrollProgress: MotionValue<number>;
  velocityFactor: MotionValue<number>;
}

const WarpLines: React.FC<{ velocity: number }> = ({ velocity }) => {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;
      pos[i * 6] = x;
      pos[i * 6 + 1] = y;
      pos[i * 6 + 2] = z;
      pos[i * 6 + 3] = x;
      pos[i * 6 + 4] = y + 10;
      pos[i * 6 + 5] = z;
    }
    return pos;
  }, []);

  const linesRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    if (!linesRef.current) return;
    const v = Math.abs(velocity);
    linesRef.current.visible = v > 0.5;
    linesRef.current.position.y -= v * 2;
    if (linesRef.current.position.y < -30) linesRef.current.position.y = 30;
    linesRef.current.scale.set(1, 1 + v * 5, 1);
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00f2ff" transparent opacity={0.3} />
    </lineSegments>
  );
};

const DogeRocket: React.FC<{ 
  scrollProgress: MotionValue<number>, 
  velocityFactor: MotionValue<number> 
}> = ({ scrollProgress, velocityFactor }) => {
  const { camera } = useThree();
  const group = useRef<THREE.Group>(null);
  const thrusterRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!group.current) return;
    
    const progress = scrollProgress?.get() ?? 0;
    const velocity = velocityFactor?.get() ?? 0;
    
    // Smooth transition from hero to scrolling
    const targetY = progress < 0.05 
      ? Math.sin(state.clock.elapsedTime * 0.4) * 0.4
      : (progress - 0.05) * -50;
      
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.08);
    
    // Warp Field FOV
    if (camera instanceof THREE.PerspectiveCamera) {
      const targetFov = 35 + Math.abs(velocity) * 3;
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.1);
      camera.updateProjectionMatrix();
    }

    // Rotations & Shake
    const shake = Math.abs(velocity) * 0.05;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, velocity * 0.15 + (Math.random() - 0.5) * shake, 0.1);
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 + (Math.random() - 0.5) * shake;
    group.current.rotation.y += 0.005 + (Math.abs(velocity) * 0.02);

    // Mouse influence
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse.x * 3.5, 0.05);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse.y * 2.5, 0.05);

    // Dynamic thruster scaling
    if (thrusterRef.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 45) * 0.25;
        const velBoost = 1 + Math.abs(velocity) * 2;
        thrusterRef.current.scale.set(pulse * velBoost, pulse * velBoost, pulse * velBoost);
    }

    if (lightRef.current) {
        lightRef.current.intensity = (100 + Math.abs(velocity) * 200) * 150; 
    }
  });

  return (
    <group ref={group} scale={1.8}>
        <Trail
            width={0.8}
            length={15}
            color={new THREE.Color('#00f2ff')}
            attenuation={(t) => t * t}
        >
            <mesh position={[0, -2, 0]} />
        </Trail>

      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Main Body - Chrome Finish */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.7, 4, 32]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0.05}
            emissive="#111"
          />
        </mesh>
        
        {/* Carbon Fiber Nose */}
        <mesh position={[0, 2.7, 0]}>
          <coneGeometry args={[0.5, 1.4, 32]} />
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
        </mesh>

        {/* Cyber Fins */}
        {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
            <group key={i} rotation={[0, angle, 0]}>
                <mesh position={[0.75, -1.4, 0]} rotation={[0, 0, -0.2]}>
                    <boxGeometry args={[0.9, 1.4, 0.04]} />
                    <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={5} />
                </mesh>
            </group>
        ))}

        {/* Bridge Window */}
        <mesh position={[0, 1.5, 0.54]} rotation={[0.4, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#00f2ff" transparent opacity={0.8} emissive="#00f2ff" emissiveIntensity={3} />
        </mesh>
        
        {/* Plasma Exhaust */}
        <mesh ref={thrusterRef} position={[0, -2.4, 0]}>
          <cylinderGeometry args={[0.45, 0.01, 1.2, 16]} />
          <meshStandardMaterial 
            color="#00f2ff" 
            transparent 
            opacity={0.8} 
            emissive="#00f2ff" 
            emissiveIntensity={40} 
          />
        </mesh>

        <pointLight ref={lightRef} position={[0, -3.2, 0]} color="#00f2ff" intensity={300} distance={20} />
      </Float>
    </group>
  );
};

const RocketScene: React.FC<RocketSceneProps> = ({ scrollProgress, velocityFactor }) => {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: true, logarithmicDepthBuffer: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={35} />
        
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 25, 10]} intensity={4} castShadow />
        <pointLight position={[-20, 10, -10]} intensity={10} color="#bd00ff" />
        <pointLight position={[20, -10, 10]} intensity={10} color="#00f2ff" />
        
        <DogeRocket scrollProgress={scrollProgress} velocityFactor={velocityFactor} />
        <WarpLines velocity={velocityFactor.get()} />
        
        <Environment preset="night" />
        
        <Stars 
            radius={250} 
            depth={50} 
            count={9000} 
            factor={8} 
            saturation={1} 
            fade 
            speed={4} 
        />
      </Canvas>
    </div>
  );
};

export default RocketScene;
