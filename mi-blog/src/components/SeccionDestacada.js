import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Chip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SeccionDestacada() {
  const theme = useTheme();

  return (
    <>
      <Card
        elevation={3}
        sx={{ display: "flex", backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="div" variant="h3">
            Libro Destacado
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 351 }}
            image="imagen_demo.jpg"
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h2">
              Dune
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              eaque voluptas reprehenderit voluptatibus. Maiores enim esse unde
              voluptatem quod dicta nesciunt temporibus, illum id repudiandae,
              accusamus velit? Id repellendus ullam consequuntur numquam
              necessitatibus nostrum magni placeat officiis consequatur
              quibusdam distinctio sequi ipsa, ea nihil accusamus eligendi, cum
              totam eos vero doloribus aperiam aspernatur dignissimos
              doloremque? Praesentium neque impedit, odit amet architecto
              aliquam ut explicabo natus a pariatur necessitatibus error quae
              quibusdam beatae itaque repellat nam numquam sint alias rerum ad
              est! Eveniet facilis a nisi qui sint, unde deleniti? Eius
              architecto fugit delectus sapiente quidem, minima distinctio
              veniam molestias odit.
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Chip label="Espacial" variant="outlined" />
            <Chip label="Espacial" variant="outlined" />
            <Chip label="Espacial" variant="outlined" />
            <Chip label="Espacial" variant="outlined" />
          </Box>
          <IconButton
            aria-label="Ver Mas"
            sx={{ borderRadius: "25%", marginLeft: "auto" }}
          >
            <Button variant="contained" endIcon={<ArrowForwardIosIcon fontSize="large" />}>
              Leer Más
            </Button>
          </IconButton>
        </Box>
      </Card>
    </>
  );
}

export default SeccionDestacada;
