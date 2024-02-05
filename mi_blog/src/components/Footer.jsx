import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <Box sx={{ px: {xs: 1, md: 8}, py: 6 }}>
      <Grid container columnSpacing={{ xs: 1 }}>
        <Grid item={true}  xs={12} sm={4} md={3}>
          <Typography component="div" variant="h4" align="left">
            links
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={4} md={6}>
          <Typography component="div" variant="h3" align="center">
            Mi Blog
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={4} md={3}>
          <Typography component="div" variant="h4" align="right">
            Redes Sociales
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
