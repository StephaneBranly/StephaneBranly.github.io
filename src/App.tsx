import React, { useRef, useState } from "react";
import "./App.scss";
import {
  ComputerSkills,
  Education,
  Experience,
  Header,
  IAandDataScienceSkills,
  Languages,
  Details,
  Hobbies,
  Projects,
} from "components";

import { Canvas, useFrame } from "@react-three/fiber";
function Box(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current!.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function App() {
  const pos1 = [-2, 0, 0];
  const pos2 = [2, 0, 0];
  return (
    <div className="App">
      {/* <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([...pos1, ...pos2])}
              count={2}
              itemSize={6}
            />
          </bufferGeometry>
          <lineBasicMaterial color="black" />
        </line>
        <Box position={pos1} />
        <Box position={pos2} />
      </Canvas> */}
      <section id="content">
        <Header />
        <Details />
        <Experience />
        <Education />
        <IAandDataScienceSkills />
        <ComputerSkills />
        <Projects />
        <Languages />
        <Hobbies />
      </section>
    </div>
  );
}

export default App;
