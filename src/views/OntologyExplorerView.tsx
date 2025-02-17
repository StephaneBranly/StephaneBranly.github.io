import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import { useOntoContext } from "ontology/OntoContext";
import { Term } from "n3";
import prefixes, { replacePrefixes } from "utils/prefixes";
import { Vector3 } from "three";

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

const renderNode = (term: Term, position: Vector3) => {
  if (term.termType === "NamedNode") {
    const link = term.value.replace(prefixes[""], "#");
    return (
      <group position={position}>
        <Sphere />

        <Html>
          <div
            style={{
              transform: "translate(-50%, -50%)",
              width: "max-content",
              backgroundColor: "white",
              border: "1px solid #dedede",
              padding: "0.1em",
              borderRadius: "0.2em",
              position: "absolute",
            }}
          >
            <a href={link} className="namednode">
              {replacePrefixes(term.value)}
            </a>
          </div>
        </Html>
      </group>
    );
  } else if (term.termType === "Literal") {
    const language = term.language ? `@${term.language}` : undefined;
    const datatype = term.datatypeString
      ? replacePrefixes(term.datatypeString)
      : undefined;
    return (
      <Html>
        <div
          style={{
            transform: "translate(-50%, -50%)",
            width: "max-content",
            backgroundColor: "white",
            border: "1px solid #dedede",
            padding: "0.1em",
            borderRadius: "0.2em",
            position: "absolute",
            top: "-20px",
          }}
        >
          <span className="literal">
            "{term.value}"
            {datatype &&
              !["xsd:string", "rdf:langString"].includes(datatype) && (
                <span className="type">^^{datatype}</span>
              )}
            <span className="language">{language}</span>
          </span>
        </div>
      </Html>
    );
  }
};

const OntologyExplorerView = () => {
  const onto = useOntoContext();

  const [nodes, setNodes] = useState<
    Record<string, { subject: Term; position: Vector3 }>
  >({});
  useEffect(() => {
    const subjects = onto.store.getSubjects(null, null, null);
    const newNodes: Record<string, { subject: Term; position: Vector3 }> = {};
    subjects.forEach((subject, index) => {
      newNodes[subject.value] = {
        subject: subject,
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ] as unknown as Vector3,
      };
    });

    setNodes(newNodes);
  }, [onto.store]);

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
        {/* <group>
          {positions.map((pos, index) => (
            <Sphere position={pos} key={index} />
          ))}
        </group> */}
        <group>
          {Object.entries(nodes).map(([key, node], index) =>
            renderNode(node.subject, node.position)
          )}
        </group>
      </Canvas>
    </div>
  );
};

export default OntologyExplorerView;
