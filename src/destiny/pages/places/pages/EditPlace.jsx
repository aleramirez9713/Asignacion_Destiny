import Footer from "../../../../ui/Footer";
import NavBar from "../../../../ui/NavBar";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterD } from "react-router-dom";
import StepByStep from "../components/StepByStep";

export const EditPlace = () => {
  return (
    <>
      <NavBar />
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 5, mb: -10 }}
        >
          <Typography
            variant="h3"
            color="primary"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "auto",
              padding: 3,
              mb: 0,
            }}
          >
            Editar datos del lugar
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={0}
            sx={{ mt: 10, mb: 10 }}
            // sm={ 12 }
          >
            <StepByStep />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
};
