import { useRef, useState } from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(1);
  useFrame((state, delta) => (ref.current.rotation.z += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => click(clicked <= 10 ? clicked + 1 : 1)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <torusKnotGeometry args={[2, 0.6, 150, 16, clicked, 5]} />
      <meshStandardMaterial color={hovered ? "#D7A107" : "#8B8B72"} />
    </mesh>
  );
}

export default function Portada() {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
          height: "75vh",
          backgroundColor: "#202023",
        }}
      >
        <Typography
          variant="h1"
          sx={{ position: "absolute", left: "50px", top: "100px", zIndex: "1" }}
        >
          Mi Blog
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          sx={{ position: "absolute", left: "50px", top: "225px", zIndex: "1" }}
        >
          Un blog de ciencia ficción
        </Typography>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />
        </Canvas>
      </Paper>
    </>
  );
}
