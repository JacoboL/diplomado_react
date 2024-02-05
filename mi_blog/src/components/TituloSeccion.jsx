import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FiberNewTwoToneIcon from "@mui/icons-material/FiberNewTwoTone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

export default function TituloSeccion({ titulo, link, children }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {children}
        <Typography variant="h2" sx={{ minWidth: 100 }}>
          {titulo}
        </Typography>
        {link && (
          <IconButton
            aria-label="Ver Mas"
            sx={{ borderRadius: "25%", marginLeft: "auto" }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
      <Divider
        sx={{
          mb: 3,
          borderBottomWidth: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      />
    </>
  );
}
