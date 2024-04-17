import { Box, Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import * as THREE from 'three'
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Loading from "./Loding"

function App() {
  return (
    <>
      <Analytics/>
      <Suspense fallback={<Loading/>}>
        <Canvas gl={{antialias:true}}>
          <Environment preset="city" />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <OrbitControls enablePan={false} enableZoom={false}/>
          <Model scale={4.5}/>
        </Canvas>        
      </Suspense>

    </>
  )
}

export default App
