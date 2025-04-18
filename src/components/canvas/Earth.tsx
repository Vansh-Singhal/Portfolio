import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';

// ----- Inline Loader Component -----
const Loader: React.FC = () => {
  const { progress } = useProgress();

  return (
    <Html center style={{ zIndex: 100 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <span className="canvas-load" />
        <p
          style={{
            fontSize: '14px',
            color: '#f1f1f1',
            fontWeight: 800,
            marginTop: 10,
          }}
        >
          {progress.toFixed(2)}% loaded
        </p>
      </div>
    </Html>
  );
};

// ----- Earth Component -----
const Earth: React.FC = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
      castShadow
    />
  );
};

useGLTF.preload('./planet/scene.gltf');

const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
