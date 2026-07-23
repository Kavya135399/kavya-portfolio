import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);
  const mesh3 = useRef<THREE.Mesh>(null!);
  const mesh4 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.2;
      mesh1.current.rotation.y += delta * 0.3;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x -= delta * 0.15;
      mesh2.current.rotation.z += delta * 0.25;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y += delta * 0.35;
      mesh3.current.rotation.z -= delta * 0.15;
    }
    if (mesh4.current) {
      mesh4.current.rotation.x += delta * 0.25;
      mesh4.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <>
      {/* 3D Torus Knot with Purple Metallic Wobble */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={mesh1} position={[-2.8, 1.2, -1]}>
          <torusKnotGeometry args={[0.7, 0.22, 128, 32]} />
          <MeshWobbleMaterial
            color="#8b5cf6"
            wireframe
            factor={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
          <Html position={[0, 1.2, 0]} center distanceFactor={8} className="pointer-events-none select-none">
            <div className="bg-purple-900/60 border border-purple-400/40 text-purple-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-md font-mono shadow-lg shadow-purple-500/20">
              &lt;AI/ML Engine /&gt;
            </div>
          </Html>
        </mesh>
      </Float>

      {/* 3D Icosahedron with Cyan Glow */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
        <mesh ref={mesh2} position={[3.2, -0.8, -0.5]}>
          <icosahedronGeometry args={[0.95, 1]} />
          <MeshWobbleMaterial
            color="#06b6d4"
            wireframe
            factor={0.5}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
          <Html position={[0, -1.3, 0]} center distanceFactor={8} className="pointer-events-none select-none">
            <div className="bg-cyan-900/60 border border-cyan-400/40 text-cyan-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-md font-mono shadow-lg shadow-cyan-500/20">
              &lt;React + Three.js /&gt;
            </div>
          </Html>
        </mesh>
      </Float>

      {/* 3D Dodecahedron Pink Mesh */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={mesh3} position={[2.5, 1.8, -2]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#d946ef"
            wireframe
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>

      {/* 3D Octahedron Glass Sphere */}
      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2.2}>
        <mesh ref={mesh4} position={[-2.4, -1.6, -1.5]}>
          <octahedronGeometry args={[0.8, 0]} />
          <MeshWobbleMaterial
            color="#3b82f6"
            wireframe
            factor={0.3}
            speed={1}
            roughness={0.1}
            metalness={0.9}
          />
          <Html position={[0, -1.1, 0]} center distanceFactor={8} className="pointer-events-none select-none">
            <div className="bg-blue-900/60 border border-blue-400/40 text-blue-200 text-xs px-2.5 py-1 rounded-full backdrop-blur-md font-mono shadow-lg shadow-blue-500/20">
              const stack = ["Python", "MERN"];
            </div>
          </Html>
        </mesh>
      </Float>
    </>
  );
};

const ParticleSwarm = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 700;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#06b6d4'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#d946ef'),
      new THREE.Color('#3b82f6'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const GridFloor = () => {
  return (
    <gridHelper
      args={[30, 30, '#8b5cf6', '#1e1b4b']}
      position={[0, -3.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const SceneRig = () => {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1.2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#d946ef" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#8b5cf6" />
        
        <FloatingShapes />
        <ParticleSwarm />
        <GridFloor />
        <SceneRig />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};
