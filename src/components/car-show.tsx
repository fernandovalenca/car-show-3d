import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Fragment, ReactNode } from "react";
import { Ground } from "./ground";
import Car from "./car";
import Rings from "./rings";
import Boxes from "./boxes";
import FloatingGrid from "./floating-grid";

export default function CarShow() {
  return (
    <Fragment>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach={"background"} />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
      />

      <Ground />
      <Rings />
      <Boxes />
      <FloatingGrid />

      <CubeCamera resolution={256} frames={Infinity}>
        {/*@ts-ignore*/}
        {(texture) => (
          <mesh>
            <Environment map={texture} />
            <Car />
          </mesh>
        )}
      </CubeCamera>
    </Fragment>
  );
}