import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterD } from "react-router-dom";
import { Divider, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "../../../ui/NavBar";
import Footer from "../../../ui/Footer";
import GridPlaces from "../../../destiny/pages/components/GridPlaces";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { EditModal } from "./components/EditModal";
import { useDispatch, useSelector } from "react-redux";

const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "70vh",
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const UserProfile = () => {

  const { displayName, email } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavBar />
      <Card sx={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 0 }}>
        <CardMedia
          component="img"
          alt="iglesia"
          height="300"
          image="../assets/13.png"
        />
      </Card>

      <Grid container padding={10} spacing={2} sx={{ mb: -20, mt: -5 }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ mb: 2, mt: 1 }}
          // alignContent="center"
        >
          <CardContent>
            <Grid
              container
              //  justifyContent="center"
              sx={{ mb: 2 }}
            >
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                color="divider"
              >
                Mi Perfil
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              // justifyContent="center"
              // justifyItems="center"
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
                  Nombre: {displayName}
                </Typography>

                <Typography variant="h6" sx={{ ml: 2 }}>
                  Correo: {email}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  onClick={handleOpen}
                  color="secondary"
                  sx={{ padding: 2 }}
                >
                  <EditIcon sx={{ fontSize: 30, mr: 1 }} />
                  Editar
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <EditModal />
                  </Box>
                </Modal>

                <Button color="error" sx={{ padding: 2 }}>
                  <DeleteIcon sx={{ fontSize: 30, mr: 1 }} />
                  Eliminar perfil
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      <Grid
        container
        position="center"
        display="flex"
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="top"
        sx={{ minHeight: "100vh", padding: 10 }}
      >
         
        <Grid container direction="column" justifyContent="center">
        <Divider sx={{  mt: 5, mb : 5 }}/>
          <Typography
            alignItems="center"
            display="flex"
            variant="h3"
            // color="primary"
            sx={{
              width: { sm: 450 },
              padding: 3,
              mb: 1,
            }}
          >
            Mis sitios
          </Typography>
        </Grid>
        <GridPlaces />
      </Grid>
      <Footer />
    </>
  );
};
