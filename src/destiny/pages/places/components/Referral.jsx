import { Grid, TextField, Typography } from "@mui/material";

export const Referral = () => {
  return (
    <Grid
    container
    direction="column"
    spacing={0}
    xl={12}
    alignItems="center"
    // justifyContent="center"
    sx={{
      width: "100% ",
      padding: 3,
      borderRadius: 2,
      alignItems: "center",
    }}
  >
      <form>
       
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
          sx={{
            mt: -10,
            mb: 1,
            width: "100%",
            padding: "10px",
            alignItems: "center",
       
          }}
        >
            
          <Grid 
          container 
          padding={5} 
          height={60}
          sx={{
           
       
          }}
          >
            <TextField
              label="Nombre de la referencia"
              type="namePlace"
              placeholder="Nombre del lugar"
              fullWidth
            />
          </Grid>
          <Grid  container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt:5, mb: -4  }}
        >

          <Typography
          variant="body1"
          sx={{ alignItems: "center" }}
        >
          Ubicación
        </Typography>
        </Grid>
          <Grid
            item
            display="flex"
            padding={5}
            sx={{  alignItems: "center"}}
          >
            <TextField
            
              label="Latitud "
              type="stateplace"
              placeholder="Latitud"
              width="60vh"
              sx={{ mr:2 }}
            />
            <TextField
              label="Longitud"
              type="stateplace"
              placeholder="Longitud"
              width="60vh"
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};


