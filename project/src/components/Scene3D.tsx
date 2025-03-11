import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Frame from './Frame';

const Scene3D = () => {
  return (
    <Canvas className="h-screen">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Frame position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Scene3D;