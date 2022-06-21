import Footer from "../../../ui/Footer";
import NavBar from "../../../ui/NavBar";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterD } from "react-router-dom";
import StepByStep from "./components/StepByStep";

const styles = {
  heroContainer: {
    backgroundImage: `url(${"../assets/4.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    padding: 24,
    alignItems: "center",
  },
};

export const RegisterPlace = () => {
  return (
    <>
      <NavBar />

      <div>
        <Grid
          item
          xs={3}
          sx={{
            width: { sm: 450 },
            padding: 10,
          }}
          style={styles.heroContainer}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 10 }}

            // sm={ 12 }
          >
            <Typography
              variant="h2"
              color="white"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "auto",
                padding: 3,
                mb: 0,
              }}
            >
              Registra un nuevo lugar
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ mt: -10, mb: 5 }}
            >
              <Typography
                variant="h5"
                color="white"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: "auto",
                  padding: 3,
                  mt: 4,
                }}
              >
                Recomienda a otras personas lugares que tu ya conoces
              </Typography>
            </Grid>
          </Grid>
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
        spacing={ 0 }
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
