import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FiberNewTwoToneIcon from "@mui/icons-material/FiberNewTwoTone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled, useTheme } from "@mui/material/styles";

const Subrrayado = styled(Box)(({ theme }) => ({
  "&::after": {
    content: '""',
    width: "100%",
    height: 5,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    display: "block",
    margin: "1px 0px 25px 0px",
  },
}));

export default function TituloSeccion({ titulo, link, children }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Subrrayado>
          <Box justifyContent={"left"} alignItems={"left"} display={"flex"}>
            {children}
            <Typography variant="h2" sx={{ minWidth: 100, ml: 1.5 }}>
              {titulo}
            </Typography>
          </Box>
        </Subrrayado>
        {link && (
          <IconButton
            aria-label="Ver Mas"
            sx={{
              borderRadius: "25%",
              marginLeft: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
    </>
  );
}
