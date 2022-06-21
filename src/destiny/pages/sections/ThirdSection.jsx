
import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterD } from "react-router-dom";

const styles = {
  heroContainer: {
    backgroundImage: `url(${"../assets/2.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    padding: 24,
    alignItems: "center",
  },
};

export const ThirdSection = () => {
  return (
    <>
      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 450 },
          padding: 10,
          borderRadius: 5,
        }}
        style={styles.heroContainer}
      >
        <Grid 
        container 
        alignItems="center"
        justifyContent="center"
        spacing={ 0 }
        sx={{ mt: 10, mb: 10 }}
        // sm={ 12 }
        >
            <Typography
              variant="h1"
              color="white"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "auto",
                padding: 3,
                mb: 0,
              }}
            >
              Ahora te toca a ti...
            </Typography>
            <Typography
              variant="h4"
              color="white"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "auto",
                padding: 3,
                mt: 4,
              }}
            >
              Registra lugares que conozcas
            </Typography>
            <Grid 
            item xs={ 12 } 
            sm={ 6 } 
            padding={ 5 } 
            height= {60}
            >
              <Button component={ RouterD } to="/place/register" variant="contained" color="secondary" fullWidth>
                Registrar lugar
              </Button>
              </Grid>
          </Grid>
      </Grid>
    </>
  );
};
