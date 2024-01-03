import { Box, Divider, Typography, IconButton } from "@mui/material";
import FiberNewTwoToneIcon from "@mui/icons-material/FiberNewTwoTone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function TituloSeccion({ titulo }) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <FiberNewTwoToneIcon sx={{ fontSize: 60 }} />
        <Typography variant="h2" sx={{ minWidth: 100 }}>
          {titulo}
        </Typography>
        <IconButton aria-label="Ver Mas" sx={{ borderRadius: '25%', marginLeft:'auto'}}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 3, borderBottomWidth: 5 }} />
    </>
  );
}