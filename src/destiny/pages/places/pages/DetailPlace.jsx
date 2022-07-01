import Footer from "../../../../ui/Footer";
import NavBar from "../../../../ui/NavBar";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterD } from "react-router-dom";
import { Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MapPlace } from "../components/MapPlace";

export const DetailPlace = () => {
  return (
    <>
      <NavBar />
      <Card sx={{ maxWidth: "100%", maxHeight: "100%" }}>
        <CardMedia
          component="img"
          alt="iglesia"
          height="300"
          image="../assets/10.jpg"
        />
      </Card>

      <Grid container padding={1} spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ mb: 2, mt: 1 }}
          alignContent="center"
        >
          <CardContent>
            <Grid container justifyContent="center" sx={{ mb: 2 }}>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                color="divider"
              >
                Iglesia de Comayagua
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              justifyItems="center"
              spacing={10}
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="divider"
                >
                  Datos generales
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  Descripción: Iglesia católica
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  Estado: Disponible
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  Tipo de lugar: Iglesia
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  Ubicación: ( 1.4555, 1.33636)
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" color="divider">
                  Puntos de referencia:
                </Typography>
                <Typography variant="h6" sx={{ ml: 2 }}></Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  1. Nombre: Parque central
                </Typography>

                <Typography variant="h6" sx={{ ml: 4 }}>
                  Ubicación: ( 1.4555, 1.33636)
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  1. Nombre: Parque central
                </Typography>

                <Typography variant="h6" sx={{ ml: 4 }}>
                  Ubicación: ( 1.4555, 1.33636)
                </Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  1. Nombre: Parque central
                </Typography>

                <Typography variant="h6" sx={{ ml: 4 }}>
                  Ubicación: ( 1.4555, 1.33636)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  component={RouterD}
                  to="/place/detail/edit"
                  color="secondary"
                  sx={{ padding: 2 }}
                >
                  <EditIcon sx={{ fontSize: 30, mr: 1 }} />
                  Editar
                </Button>

                <Button
                  
                  color="error"
                  sx={{ padding: 2 }}
                >
                  <DeleteIcon sx={{ fontSize: 30, mr: 1 }} />
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </CardContent>

          <Grid 
          container 
          justifyContent="center" 
          sx={{ mb: 2 , mt:5}}
          >
            <Card  sx={{ maxWidth: "100%", maxHeight: "100%" }}>
  

                <MapPlace />
              {/* /> */}
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};
