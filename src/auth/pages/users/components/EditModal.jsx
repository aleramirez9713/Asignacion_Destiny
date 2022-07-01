import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../../layout/AuthLayout";
import { useSelector } from "react-redux";

export const EditModal = () => {
  const { displayName, email } = useSelector((state) => state.auth);

  return (
    <div>
      <form>
        <Grid
          container
          justifyContent="center"
          //   width={{  md: 12 , lg: 1 }}
          sx={{ mb: 2 }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Editar mis datos
          </Typography>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Nombre
            </Typography>
            <TextField
              // en este label es donde extraeré el usuario que esta registrado
              type="name"
              placeholder={displayName}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Correo
            </Typography>
            <TextField type="email" placeholder={email} fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Actualizar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
