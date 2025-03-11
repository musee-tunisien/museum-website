import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Frame = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<Mesh>(null);
  const { scene } = useGLTF('/mymodel.glb');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      position={position}
      scale={[1, 1, 1]} // Adjust scale as needed for your model
    />
  );
};

// Pre-load the model
useGLTF.preload('/mymodel.glb');

export default Frame;