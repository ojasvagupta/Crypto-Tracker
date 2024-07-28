import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
function Figure(props) {
  const { scene } = useGLTF("./bit_coin.glb");
  return <primitive object={scene} {...props} />;
}

const Model = () => {
  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute", top: "8%" }}
      >
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={-1} />
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Figure scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Model;
