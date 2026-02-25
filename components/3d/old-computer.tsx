"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function RotatingComputer({
  ref,
}: {
  ref: React.RefObject<THREE.Group | null>;
}) {
  const { scene } = useGLTF("/assets/old_computer.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust rotation speed
    }
  });

  return <primitive object={scene} position={[0, -0.5, 0]} />;
}

export default function OldComputer() {
  const ref = useRef<THREE.Group>(null);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-2, 5, 10], fov: 25 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 0]} intensity={5} />
      <directionalLight position={[-10, 10, 5]} intensity={5} />
      <directionalLight position={[-10, 20, 0]} intensity={5} />
      <directionalLight position={[0, -10, 0]} intensity={5} />
      <directionalLight position={[-5, 5, 0]} intensity={5} />
      <directionalLight position={[0, 3, 0]} intensity={5} />
      <Suspense fallback={null}>
        <group ref={ref}>
          <RotatingComputer ref={ref} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            target={[0, 0, 0]}
          />
        </group>
      </Suspense>
    </Canvas>
  );
}
