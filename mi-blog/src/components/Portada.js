import { Paper, Typography } from "@mui/material";

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
        <Typography variant="h1" align="center">
          Página Principal
        </Typography>
      </Paper>
    </>
  );
}
