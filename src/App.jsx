import { Box, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import * as THREE from 'three'

function App() {
  return (
    <>
      <Canvas>
        <directionalLight position={[1,1,1]} intensity={4}/>
        <ambientLight intensity={0.6}/>
        <OrbitControls/>
        <Model scale={2.5} rotation-y={THREE.MathUtils.degToRad(180)}/>
      </Canvas>
    </>
  )
}

export default App
