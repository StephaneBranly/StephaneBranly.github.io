import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { Html, useProgress } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from "three-stdlib";

const Loader = () => {
    const { progress } = useProgress()
    return <Html><div id='loading'>{progress} % loaded</div></Html>
  }
  
const Cube = () => {
    const ref = useRef<THREE.Mesh>(null)
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x = ref.current.rotation.y += 0.01
        }
    })
    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

const Compiegne = () => {
    const gltf = useLoader(GLTFLoader, './compi.gltf')
    const ref = useRef<THREE.Group>(null)

    // useFrame(() => {
    //     if (ref.current) {
    //         ref.current.rotation.y += 0.001
    //     }
    // })
    return (
        <Suspense fallback={null}>
            <group ref={ref}>
                <primitive object={gltf.scene} />
            </group>
        </Suspense>
      )
}
const Scene = () => {
    return (<Canvas camera={{ position: [200, 250, 200] }}>
        {/* <fog attach="fog" args={['#202030', 10, 25]} /> */}
        <Suspense fallback={<Loader />}>
            <gridHelper />
            <axesHelper />
            <ambientLight intensity={1} />
            <pointLight position={[10, 300, 10]} intensity={1} distance={10000} />
            <Cube />
            <Compiegne />
        </Suspense>
    </Canvas>)
}

export default Scene
