import { Grid, Typography, Box } from "@mui/material";
import { SearchOption } from "../components/Search";

const styles = {
  heroContainer: {
    height: "100%",
    backgroundImage: `url(${"../assets/1.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    padding: 24,
    alignItems: "center",
  },
};

export const FirstSection = () => {
    return (
      <>
        <Grid
          direction="column"
          padding={0}
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={styles.heroContainer}
          sx={{ width: { sm: 450 }, minHeight: "100vh", padding: 0, backgroundColor: "white" }}
          // sm={ 12 }
        >
           <Grid 
        container 
        alignItems="center"
        justifyContent="center"
        spacing={ 0 }
        sx={{ mt: 10, mb: 10 }}
        // sm={ 12 }
        >
          {/* <Box sx={{ minWidth: "auto", minHeight: "10vh", padding: 0 }}> */}
            <Typography 
              variant="h2"
              color="white"
              alignItems="center"
              justifyContent="center"
              sx={{
                width:  "auto" ,
                padding: 3,
                mb: 1,
              }}
            >
              Conoce y recomienda nuevos lugares
            </Typography>
            
        </Grid>
        </Grid>
       
      </>
    );
  };