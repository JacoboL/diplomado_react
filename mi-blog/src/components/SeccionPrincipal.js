import { Paper, Typography } from "@mui/material";

export default function SeccionPrincipal() {
  return (
    <Paper
      elevation={3}
      sx={{
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        height: "75vh",
        backgroundColor: "#202023",
      }}
    >
      <Typography variant="h1" align="center">
        Sección Principal
      </Typography>
    </Paper>
  );
}