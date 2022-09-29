import { Suspense, useMemo, useRef } from "react";
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
    const gltf = useLoader(GLTFLoader, './Compiegne.glb')
    const ref = useRef<THREE.Group>(null)

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.001
        }
    })

    useMemo(() => {
        gltf.scene.traverse((child) => {
            if(child instanceof THREE.Mesh && child.name === 'Areasbuilding') {
                child.material = new THREE.MeshStandardMaterial({ color: '#1110f6' })
            } else {
                (child as THREE.Line).material = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 30 } );
            }
        })
    }, [gltf])
    return (
        <Suspense fallback={null}>
            <group ref={ref}>
                <primitive object={gltf.scene} />
            </group>
        </Suspense>
      )
}
const Scene = () => {
    return (<Canvas camera={{ position: [200, 150, 400] }}>
        <fog attach="fog" args={['#000', 600, 790]} />
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
