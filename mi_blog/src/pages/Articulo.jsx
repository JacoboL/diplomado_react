import React from "react";

import { useTheme, styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2";

import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

const Fondo = styled("img")(({ theme }) => ({
  aspectRatio: "1.8",
  objectFit: "cover",
  borderRadius: 10,
  width: "100%",
  height: "70vh",
  filter: "blur(5px) opacity(66.66%)",
}));

const Poster = styled("img")(({ theme }) => ({
  position: "absolute",
  marginTop: 30,
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  aspectRatio: "0.665",
  objectFit: "cover",
  borderRadius: 15,
  maxWidth: 300,
  boxShadow: `10px 10px 5px 0px ${alpha(theme.palette.common.black, 0.15)}`,
}));

const SubTitulo = styled(Typography)(({ theme }) => ({
  "&::before": {
    content: '""',
    width: "100%",
    height: 5,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    display: "block",
    margin: "10px 0px 10px 0px",
  },
}));

const LineaVertical = styled(Box)(({ theme }) => ({
  "&::before": {
    content: '""',
    width: 5,
    height: "100%",
    backgroundColor: theme.palette.secondary.main,
    display: "inline",
    marginRight: 10,
  },
}));

const TituloSeccion = styled(Box)(({ theme }) => ({
  "&::after": {
    content: '""',
    width: "100%",
    height: 5,
    backgroundColor: theme.palette.secondary.main,
    display: "block",
    margin: "5px 0px 10px 0px",
  },
}));

function KeyWord({ texto }) {
  const theme = useTheme();

  return (
    <Chip
      label={texto}
      color="primary"
      clickable
      sx={{
        "& .MuiChip-label": {
          color: theme.palette.info.main,
          fontWeight: "550",
          fontSize: 16,
        },
      }}
    />
  );
}

function KeyWords() {
  const claves = [
    "Espacial",
    "Soft Sci-fi",
    "Saga Dune",
    "Futurista",
    "Novela",
    "Frank Herbert",
    "Estados Unidos",
  ];

  return (
    <Box justifyContent={"left"} alignItems={"left"} display={"flex"}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }}>
        {claves.map((k, i) => (
          <Grid key={i}>
            <KeyWord texto={k} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function Relacionado({ imagen }) {
  return (
    <Card sx={{ borderRadius: 3, width: "50%" }} elevation={2}>
      <CardActionArea>
        <CardMedia
          sx={{
            aspectRatio: "0.665",
            borderRadius: 3,
            objectFit: "cover",
          }}
          component="img"
          image={imagen}
          title="Dune"
          alt="Dune"
        />
      </CardActionArea>
    </Card>
  );
}

function Articulo() {
  const theme = useTheme();
  const RelatedContent = [
    "imagen_demo.jpg",
    "imagen_demo.jpg",
    "imagen_demo.jpg",
  ];

  return (
    <Paper elevation={1}>
      <Box sx={{ backgroundColor: theme.palette.common.black }}>
        <Fondo
          srcSet="imagen_demo_h.jpg"
          src="imagen_demo_h.jpg"
          alt="dune"
          loading="lazy"
        />
        <Poster
          srcSet="imagen_demo.jpg"
          src="imagen_demo.jpg"
          alt="dune"
          loading="lazy"
        />
      </Box>
      <Box sx={{ px: { xs: 3, sm: 6, md: 12 }, py: 6 }}>
        <Box justifyContent={"left"} alignItems={"left"} display={"flex"}>
          <LineaVertical>
            <Typography variant="h2" component="div" align="left">
              Dune
            </Typography>
            <SubTitulo gutterBottom variant="h6" component="div" align="left">
              Por Jacobbo Leyva 32.02.3001
            </SubTitulo>
          </LineaVertical>
          <Box
            sx={{
              borderRadius: "25%",
              marginLeft: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <IconButton aria-label="Compartir" color="secondary">
              <ShareRoundedIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 15 }}
            sx={{ my: 2 }}
          >
            <Grid xs={12} sm={8} md={8}>
              <Box>
                <Grid container rowSpacing={5}>
                  <Grid xs={12}>
                    <TituloSeccion>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                      >
                        Sinopsis
                      </Typography>
                    </TituloSeccion>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      align="left"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae sunt minus dolorem, est sint enim dolore quam
                      similique! Unde exercitationem sapiente a possimus veniam
                      nisi odio omnis esse? Eaque, omnis similique error hic
                      facilis iure saepe obcaecati. Eum perferendis odio
                      praesentium soluta animi veniam est, consequatur, ipsum
                      maxime minima quod fugiat illo id optio, sed quos
                      explicabo quibusdam assumenda? Quo neque maiores natus
                      similique accusamus minima, harum adipisci recusandae
                      facilis fugiat eius magnam tempora eveniet?
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <TituloSeccion>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                      >
                        El Libro
                      </Typography>
                    </TituloSeccion>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      align="left"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore aliquam accusamus fugit quae eveniet. Ipsa
                      sapiente eligendi ratione quibusdam magnam quasi
                      consequuntur laborum veritatis animi dignissimos,
                      laudantium doloribus.
                      <br /> Id natus omnis voluptate expedita totam eveniet
                      cumque sint blanditiis fuga delectus perspiciatis non
                      labore accusantium, ad laboriosam sequi dignissimos
                      aspernatur a ab vel reiciendis. Quae, totam, perspiciatis
                      ea, iure eius quasi odio nobis eligendi eum possimus quod
                      excepturi perferendis id voluptatibus necessitatibus
                      consectetur quisquam ab recusandae accusantium eveniet.
                      <br /> Qui culpa nemo, maiores quae, nisi voluptatum
                      voluptatibus, ratione voluptas vitae facere distinctio
                      optio sequi repellendus! Voluptas ut fugiat nostrum
                      molestias, minima eum laboriosam aperiam repudiandae
                      laudantium dolorum est tempore dolores recusandae animi
                      quam iure possimus reprehenderit soluta tempora sed
                      officiis iste cumque ipsam quisquam. <br />
                      Veniam nam accusamus saepe blanditiis laboriosam corporis
                      earum reiciendis dolorem, necessitatibus facere vitae
                      officia doloremque. Consectetur necessitatibus similique
                      incidunt quibusdam dolor hic officiis, minus ipsum id
                      accusamus. <br />
                      Dolor accusantium eius libero consequuntur cumque,
                      mollitia voluptate necessitatibus labore omnis, aperiam
                      ipsa nesciunt autem blanditiis dolores minima velit, eos
                      odio placeat enim doloribus eaque eveniet non. <br />
                      Saepe at voluptatem deserunt blanditiis quidem error ex
                      eaque laborum eius ipsum ratione, fuga illum consequatur
                      accusamus magnam hic aspernatur soluta corrupti eum?{" "}
                      <br />
                      Ratione ipsam quas corrupti rem odio nemo esse labore,
                      temporibus mollitia obcaecati quibusdam tempore
                      repudiandae, eaque cum animi officia illum in deserunt
                      necessitatibus molestias natus! Reprehenderit pariatur
                      nesciunt aperiam quia fuga, dolor, voluptas possimus nam
                      harum voluptatum delectus saepe, dicta suscipit quibusdam.
                      <br /> Veniam, quae nihil est ad, modi esse vero
                      consequuntur id quod ea neque possimus soluta fugit
                      beatae, reprehenderit voluptates officiis earum saepe
                      corporis optio in deleniti sit repellendus.
                      <br /> Quaerat aliquid asperiores, laboriosam impedit
                      cupiditate minus amet perspiciatis iure odit totam a autem
                      ut corporis vel eveniet repellat omnis id quia odio quis?
                      <br /> Labore, sint excepturi ipsum amet nobis itaque,
                      eaque ullam blanditiis quaerat fuga aliquid veniam,
                      consequatur illum deserunt modi quo incidunt voluptates
                      quibusdam.
                      <br /> Id reprehenderit voluptatum totam adipisci
                      veritatis suscipit ipsam ipsum voluptas, accusantium
                      tempore repudiandae ipsa explicabo consequuntur iure
                      nihil? <br />
                      Iure inventore tempore cumque libero fugiat itaque, odit a
                      assumenda obcaecati architecto sint nihil corrupti autem
                      labore illo fugit culpa odio rem dolorem delectus
                      laboriosam.
                      <br /> Laborum nostrum repudiandae facilis illo odit
                      ducimus, exercitationem, expedita perspiciatis assumenda
                      placeat iusto consequatur quidem dicta tenetur saepe ipsum
                      quae error.
                      <br /> Eveniet dicta impedit doloremque rem maxime
                      explicabo praesentium itaque aliquam vitae tempora quas
                      quasi dolores quos perspiciatis a numquam, dolorem, eos,
                      aspernatur iure consequuntur! Debitis tempore veniam
                      delectus incidunt?
                      <br /> Mollitia illo veniam expedita omnis consequatur
                      magnam sit minima recusandae vel non enim maiores,
                      repudiandae asperiores, blanditiis saepe, eum aspernatur.
                      <br />
                      Error repellendus esse voluptas officiis reprehenderit eum
                      ad nostrum, modi quisquam, amet quo debitis eaque. <br />
                      Cum odio saepe qui explicabo ab eius pariatur quos
                      temporibus praesentium facilis dolorum ullam fugiat, culpa
                      excepturi aliquid at non, nihil illum nulla perferendis
                      eum incidunt recusandae? <br />
                      Voluptate sunt fuga unde error at explicabo laudantium rem
                      cupiditate perferendis harum. <br />
                      Exercitationem facere aperiam dolorum dolore, sapiente
                      nostrum minus necessitatibus laboriosam explicabo aut
                      dolor perferendis accusamus doloremque, similique a!
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <KeyWords />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <Box>
                <Grid container rowSpacing={5}>
                  <Grid xs={12}>
                    <TituloSeccion>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                      >
                        Ficha Técnica
                      </Typography>
                    </TituloSeccion>
                    <Box>
                      <Grid container columnSpacing={{ xs: 5 }}>
                        <Grid xs={4}>Título</Grid>
                        <Grid xs={8}>Dune</Grid>
                        <Grid xs={4}>Escritor</Grid>
                        <Grid xs={8}>Frank Herbert</Grid>
                        <Grid xs={4}>Año</Grid>
                        <Grid xs={8}>1965</Grid>
                        <Grid xs={4}>País</Grid>
                        <Grid xs={8}>Estados unidos</Grid>
                        <Grid xs={4}>Idioma Original</Grid>
                        <Grid xs={8}>Ingles</Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <TituloSeccion>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                      >
                        Autor
                      </Typography>
                    </TituloSeccion>
                    <Box
                      justifyContent={"left"}
                      alignItems={"left"}
                      display={"flex"}
                    >
                      <Avatar
                        sx={{ mr: 2, bgcolor: theme.palette.secondary.main }}
                      >
                        JL
                      </Avatar>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        align="left"
                      >
                        Jacobo Leyva
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        align="left"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nesciunt odio possimus adipisci labore fugiat
                        expedita nihil molestiae tempore?
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <TituloSeccion>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                      >
                        Contenido Relacionado
                      </Typography>
                    </TituloSeccion>
                    <Box>
                      <Grid container rowSpacing={5} columnSpacing={{ xs: 15 }}>
                        {RelatedContent.map((Rc, i) => (
                          <Grid key={i}>
                            <Relacionado imagen={Rc} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}

export default Articulo;
