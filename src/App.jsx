import { Box, Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import * as THREE from 'three'

function App() {
  return (
    <>
      <Canvas gl={{antialias:true}}>
        <Environment preset="city" />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        <Model scale={2.5} rotation-y={THREE.MathUtils.degToRad(180)}/>
      </Canvas>
    </>
  )
}

export default App
