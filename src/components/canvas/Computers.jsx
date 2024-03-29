import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75} //we check if isMobile and then reduce the size of the model to this scale
        position={isMobile ? [1, -3, -0.75] : [0, -3.25, -1.5]}
        rotation={isMobile ? [-0.01, -5.75, -0.1] : [-0.01, -0.75, -0.1]} // for smooth rotation
        // {[the x origin elevation, the side view angle, the tilt, the frontal angle of view]}
        // 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { // inside here, we check if we are on a mobile device
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as an event listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    // this code is very similar to what i saw online
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // we are loading the object onto our react three fiber canvas
    <Canvas
      // className={isMobile ?  'hidden' : ''}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} //it is the most important part of every 3D scene, where the light is coming from is also important
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> 
      {/* suspense is coming from react, it allows us to have a loader while the model is loading */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // to have a fixed axis/angle of view
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} cl />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;