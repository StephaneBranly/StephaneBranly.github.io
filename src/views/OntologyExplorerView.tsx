import { Canvas } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Html, OrbitControls } from "@react-three/drei";

function Sphere(props: any) {
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
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial color={hovered ? "#150941" : "#004aad"} />
    </mesh>
  );
}

const OntologyExplorerView = () => {
  const positions = useMemo(() => {
    return Array.apply(null, Array(20)).map(() => {
      return [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      ];
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: "100px",
      }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Html>
          <div
            style={{
              width: "max-content",
              color: "white",
              backgroundColor: "#004aad",
            }}
          >
            Coming soon
          </div>
        </Html>
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <group>
          {positions.map((pos, index) => (
            <Sphere position={pos} key={index} />
          ))}
        </group>
      </Canvas>
    </div>
  );
};

export default OntologyExplorerView;
