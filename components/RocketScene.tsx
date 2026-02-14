
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

interface RocketSceneProps {
  scrollProgress: MotionValue<number>;
  velocityFactor: MotionValue<number>;
}

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
    
    const progress = scrollProgress.get() || 0;
    const velocity = velocityFactor.get() || 0;
    
    // Position Logic
    const targetY = progress < 0.15 
      ? Math.sin(state.clock.elapsedTime * 0.8) * 0.3 
      : (progress - 0.15) * -22;
      
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.08);
    
    // Dynamic FOV - Warp Effect
    if (camera instanceof THREE.PerspectiveCamera) {
      const targetFov = 40 + Math.abs(velocity) * 2;
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.1);
      camera.updateProjectionMatrix();
    }

    // Dynamic Rotation
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, velocity * 0.2, 0.1);
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    group.current.rotation.y += 0.005 + (Math.abs(velocity) * 0.01);

    // Follow mouse with lag
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse.x * 3, 0.05);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse.y * 2, 0.05);

    // Thruster intensity
    if (thrusterRef.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 30) * 0.3;
        const velPulse = 1 + Math.abs(velocity) * 1.5;
        thrusterRef.current.scale.set(pulse * velPulse, pulse * velPulse, pulse * velPulse);
    }

    if (lightRef.current) {
        lightRef.current.intensity = (15 + Math.abs(velocity) * 50) * 500; 
    }
  });

  return (
    <group ref={group}>
        <Trail
            width={1.2}
            length={12}
            color={new THREE.Color('#00f2ff')}
            attenuation={(t) => t * t * t}
        >
            <mesh position={[0, -1.8, 0]} />
        </Trail>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.75, 3.2, 64]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.95} 
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#111"
          />
        </mesh>
        
        <mesh position={[0, 2.3, 0]}>
          <coneGeometry args={[0.55, 1.4, 64]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0} />
        </mesh>

        {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
            <group key={i} rotation={[0, angle, 0]}>
                <mesh position={[0.75, -1.2, 0]} rotation={[0, 0, -0.2]}>
                    <boxGeometry args={[1, 1.2, 0.05]} />
                    <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
                </mesh>
            </group>
        ))}

        <mesh position={[0, 1.2, 0.5]} rotation={[0.4, 0, 0]}>
          <sphereGeometry args={[0.25, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial 
            color="#00f2ff" 
            transparent 
            opacity={0.8} 
            roughness={0} 
            metalness={1}
            transmission={0.8}
            thickness={1}
          />
        </mesh>
        
        <mesh position={[0, 1.15, 0.45]}>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshStandardMaterial color="#c5a059" roughness={0.5} />
        </mesh>
        
        <mesh ref={thrusterRef} position={[0, -2, 0]}>
          <cylinderGeometry args={[0.5, 0.1, 1.2, 32]} />
          <meshStandardMaterial 
            color="#00f2ff" 
            transparent 
            opacity={0.7} 
            emissive="#00f2ff" 
            emissiveIntensity={20} 
          />
        </mesh>

        <pointLight ref={lightRef} position={[0, -2.5, 0]} color="#00f2ff" intensity={20} distance={20} />
      </Float>
    </group>
  );
};

const RocketScene: React.FC<RocketSceneProps> = ({ scrollProgress, velocityFactor }) => {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        <ambientLight intensity={0.15} />
        <spotLight position={[20, 20, 15]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-15, 10, -5]} intensity={0.8} color="#bd00ff" />
        <pointLight position={[15, -10, 5]} intensity={0.5} color="#00f2ff" />
        
        <DogeRocket scrollProgress={scrollProgress} velocityFactor={velocityFactor} />
        
        <Environment preset="night" />
        
        <Stars 
            radius={250} 
            depth={80} 
            count={10000} 
            factor={7} 
            saturation={1} 
            fade 
            speed={2.5} 
        />
      </Canvas>
    </div>
  );
};

export default RocketScene;
