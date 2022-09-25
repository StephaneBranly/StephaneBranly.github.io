import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
    const { progress } = useProgress()
    return <Html><div id='loading'>{progress} % loaded</div></Html>
  }
  

const Scene = () => {
    return (<Canvas>
        {/* <fog attach="fog" args={['#202030', 10, 25]} /> */}
        <Suspense fallback={<Loader />}>
            <gridHelper />
            <axesHelper />
            <ambientLight intensity={0.1} />
        </Suspense>
    </Canvas>)
}

export default Scene
