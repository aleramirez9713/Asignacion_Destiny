import { Grid, Typography, Box } from "@mui/material";
// import CardPlace from "./components/CardPlace";
import GridPlaces from "../components/GridPlaces";
import { SearchMin } from "../components/SearchMin";
import SearchSelect from "../components/SearchSelect";

export const SecondSection = () => {
  return (
    <>
      <Grid
      container
      position="center"
      display="flex"
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="top"
      sx={{ minHeight: "100vh", padding: 4 }}
      
     
    >
  <Grid container direction='row' justifyContent='center'>

          <Typography
            alignItems="center"
            display="flex"
            variant="h2"
            color="primary"
            sx={{
              width: { sm: 450 },
              padding: 3,
              mb: 1,
         
            }}
          >
            ¿ A donde  ir ?
          </Typography>
          <Grid container direction='row' justifyContent='center'>
{/* 
           <SearchMin/>
          <SearchSelect /> */}
          </Grid>
          </Grid>

        <GridPlaces />
      </Grid>
    </>
  );
};
