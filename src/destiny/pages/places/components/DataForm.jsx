import { Grid, TextField, Typography } from "@mui/material";

export const DataForm = () => {
  return (
    <Grid
      container
      direction="column"
      xl={8}
      sx={{
        width: "100% ",
        backgroundColor: "white",
        padding: 3,
        borderRadius: 2,
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
            mt: -2,
            mb: 1,
            width: "100%",
            padding: "10px",
            alignItems: "center",
          }}
        >
             <Typography
          variant="h6"
          sx={{ mt: "30px", padding: "1px", alignItems: "center" }}
        >
          Ingrese los datos generales del lugar
        </Typography>
          <Grid 
          container 
          padding={5} 
          height={60}>
            <TextField
              label="Nombre del lugar"
              type="namePlace"
              placeholder="Nombre del lugar"
              fullWidth
            />
          </Grid>

          <Grid 
          container 
          padding={5}  
          height={60} >
            <TextField
              label="Descripción"
              type="descriptionPlace"
              placeholder="Descripción"
              fullWidth
              
            />
          </Grid>

          <Grid 
          container 
          padding={5} 
          height={60}>
            <TextField
              label="Estado"
              type="stateplace"
              placeholder="Estado"
              fullWidth
            />
          </Grid>
          <Grid container 
          padding={5} sx= {{height:"60px"}}>
            <TextField
              label="Tipo"
              type="typePlace"
              placeholder="Tipo"
              fullWidth
            />
          </Grid>
          <Grid  container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt:5 }}
        >

          <Typography
          variant="body1"
          sx={{ alignItems: "center" }}
        >
          Coordenadas de la ubicación
        </Typography>
        </Grid>
          <Grid
            item
            // direction="row"
            display="flex"
            // xs={12}
            padding={5}
            height={60}
            // justifyContent='space-between'
            sx={{  alignItems: "center" }}
          >
            <TextField
            
              label="Latitud "
              type="latitudePlace"
              placeholder="Latitud"
              width="60vh"
              sx={{ mr:2 }}
            />
            <TextField
              label="Longitud"
              type="latitudePlace"
              placeholder="Longitud"
              width="60vh"
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
