import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Scene from './Scene'

function Services1() {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-[90vh]'>
      
      <Canvas camera={{fov: 25}}>
        <OrbitControls />
        <ambientLight/>
        <Scene />
      </Canvas>
      
      </div>
  );
}

export default Services1;
