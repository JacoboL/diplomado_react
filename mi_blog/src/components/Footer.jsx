import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { styled } from "@mui/material/styles";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Link = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

function Footer() {
  const links = ["Acerca de", "Condiciones de uso", "Politica de Privacidad"];
  return (
    <Box sx={{ px: { xs: 1, md: 8 }, py: 6 }}>
      <Grid container columnSpacing={{ xs: 1 }} rowSpacing={5}>
        <Grid xs={12} sm={4} md={3}>
          <Box>
            <Grid container columnSpacing={{ xs: 1 }}>
              {links.map((l, i) => (
                <Grid key={i} xs={12}>
                  <Link component="a" href="#" variant="h6" align="left">
                    {l}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} sm={4} md={6}>
          <Typography component="div" variant="h3" align="center">
            Mi Blog
          </Typography>
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <Box>
            <Typography
              gutterBottom
              component="div"
              variant="h6"
              align="center"
            >
              Siguenos
            </Typography>
            <Grid container columnSpacing={{ xs: 10 }}>
              <Grid xs={2}>
                <FacebookOutlinedIcon />
              </Grid>
              <Grid xs={2}>
                <FacebookOutlinedIcon />
              </Grid>
              <Grid xs={2}>
                <FacebookOutlinedIcon />
              </Grid>
              <Grid xs={2}>
                <FacebookOutlinedIcon />
              </Grid>
              <Grid xs={2}>
                <FacebookOutlinedIcon />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
