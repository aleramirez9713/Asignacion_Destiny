import  React ,{useState, useEffect} from "react";

import Footer from "../../../../ui/Footer";
import NavBar from "../../../../ui/NavBar";
import { Link as RouterD, useParams } from "react-router-dom";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useDestinyStore, useForm } from "../../../../hooks";
import { getPlacesById } from "../../../../hooks/API/Get";

import Box from "@mui/material/Box";
import { postPlaces } from "../../../../hooks/API/Post";

const formData = {
  namePlace: "",
  descriptionPlace: "",
  latitudePlace: "",
  lenghtPlace: "",
  referencePoints: [
    // nameRP: "",
    // latitudeRP: "",
    // lenghtRP: "",
  ],
};

const formValidations = {
  namePlace: [(value) => value.length >= 1, "El nombre es obligatorio."],
  descriptionPlace: [ (value) => value.length >= 1, "La descripción es obligatoria."],
  latitudePlace: [(value) => value.length >= 1, "Campo obligatorio."],
  lenghtPlace: [(value) => value.length >= 1, "Campo obligatorio."],

  // nameRP: [(value) => value.length >= 1, "El nombre es obligatorio."],
  // latitudeRP: [(value) => value.length >= 1, "Campo obligatorio."],
  // lenghtRP: [(value) => value.length >= 1, "Campo obligatorio."],


};




const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '25rem',
  // height: '5rem',
  borderRadius: '16px'
};



export const EditPlace = () => {

  const { places, setActivePlace } = useDestinyStore();

  const { id } = useParams();

  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [typePlace, setType] = React.useState("");

  const getData = async () => {
    let response = await getPlacesById(id)
  if (data!=={}) {
    setLoading(false);
  }
  
    setdata(response)
  };
  
  
  React.useEffect(() => {
    getData();
  }, []);
  

  const {
    formState,
    namePlace,
    descriptionPlace,
    statePlace,
    latitudePlace,
    lenghtPlace,
    onInputChange,
    isFormValid,
    namePlaceValid,
    descriptionPlaceValid,
    latitudePlaceValid,
    lenghtPlaceValid,
  } = useForm(formData, formValidations);


  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const onSubmit = (event) => {
   
  };



  // const handleSave = async () => {
  //   let response = await postPlaces(body);

  // };

  return (
    <>
      <NavBar />

{loading ? ( <CircularProgress color='warning' />):
      <div>
        
      
        <Grid item>
        <Grid
          container
        >
          
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="center"
              // lg={12}
            >
              <Grid container justifyContent="center">
                <Typography
                  variant="h5"
                  color="secondary"
                  sx={{
                    mt: 8,
                  }}
                >
                  Actualiza los datos del lugar
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                lg={8}
                sx={{
                  width: "100% ",
                  backgroundColor: "white",
                  padding: 3,
                  borderRadius: 2,
                }}
              >
                <form onSubmit={onSubmit}>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      mt: -2,
                      mb: -8,
                      width: "100%",
                      padding: "10px",
                      alignItems: "center",
                      maxHeight: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mt: "30px", padding: "1px", alignItems: "center" }}
                    >
                      Datos generales
                    </Typography>
                    <Grid container padding={5} height={60}>
                      <TextField
                        className="form-control is-invalid"
                        label="Nombre del lugar"
                        type="text"
                        placeholder="Nombre del lugar"
                        value={namePlace}
                        fullWidth
                        name="namePlace"
                        onChange={onInputChange}
                        error={!!namePlaceValid && formSubmitted}
                        helperText={namePlaceValid}
                      />
                    </Grid>

                    <Grid container marginBottom={2} padding={5} height={60}>
                      <TextField
                        label="Descripción"
                        type="text"
                        placeholder="Descripción"
                        fullWidth
                        multiline
                        value={descriptionPlace}
                        name="descriptionPlace"
                        onChange={onInputChange}
                        error={!!descriptionPlaceValid && formSubmitted}
                        helperText={descriptionPlaceValid}
                      />
                    </Grid>

                    <Grid container marginTop={1} padding={5} height={60}>
                      <FormControl fullWidth>
                        <InputLabel id="select-state-label">Estado</InputLabel>
                        <Select
                          labelId="select-state-label"
                          id="select-state"
                          label="statePlace"
                          type="statePlace"
                          placeholder="Estado"
                          onChange={handleChangeState}
                          value={statePlace}
                        >
                          <MenuItem value={1}>Disponible</MenuItem>
                          <MenuItem value={2}>No disponible</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid container padding={5} sx={{ height: "60px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="select-type-label">Tipo</InputLabel>
                        <Select
                          labelId="select-type-label"
                          id="select-type"
                          label="typePlace"
                          onChange={handleChangeType}
                          value={typePlace}
                        >
                          <MenuItem value={"Iglesia"}>Iglesia</MenuItem>
                          <MenuItem value={"Restaurante"}>Restaurante</MenuItem>
                          <MenuItem value={"Colonia"}>Colonia</MenuItem>
                          <MenuItem value={"Parque"}>Parque</MenuItem>
                          <MenuItem value={"Centro gubernamental"}>
                            Centro gubernamental
                          </MenuItem>
                          <MenuItem value={"Centro de estudio"}>
                            Centro de estudio
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      sx={{ mt: 5 }}
                    >
                      <Typography variant="body1" sx={{ alignItems: "center" }}>
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
                      sx={{ alignItems: "center" }}
                    >
                      <TextField
                        label="Latitud "
                        type="float"
                        placeholder="Latitud"
                        width="60vh"
                        sx={{ mr: 2 }}
                        value={latitudePlace}
                        name="latitudePlace"
                        onChange={onInputChange}
                        error={!!latitudePlaceValid && formSubmitted}
                        helperText={latitudePlaceValid}
                      />
                      <TextField
                        label="Longitud"
                        type="floating"
                        placeholder="Longitud"
                        width="60vh"
                        value={lenghtPlace}
                        name="lenghtPlace"
                        onChange={onInputChange}
                        error={!!lenghtPlaceValid && formSubmitted}
                        helperText={lenghtPlaceValid}
                      />
                    </Grid>
                    <Grid
                      container
                      padding={5}
                      sx={{ height: "60px" }}
                      justifyContent="center"
                    ></Grid>
                  </Grid>
                </form>
             
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        <Grid item>
              <Grid
                container
                display="flex"
                justifyContent="center"
              >
              
                <Typography
                      variant="h6"
                      sx={{ mt: "5px", mb: "10px", padding: "1px", alignItems: "center" }}
                    >
                      Puntos de referencia
                    </Typography>
                <Grid
                  container
                  direction="flex"
                  spacing={0}
                  xl={12}
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: "100% ",
                    padding: 3,
                    borderRadius: 2,
                    alignItems: "center",
                  }}
                >
                    <Box sx={{ ...commonStyles,  borderColor: 'primary.main' }}>
                  <form
                  // onSubmit={onSubmit}
                  >
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        mb: 1,
                        width: "100%",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                          variant="body1"
                          sx={{ alignItems: "center" , mt:"30px"}}
                        >
                          Referencia 1
                        </Typography>

                      <Grid container padding={5} height={60} sx={{ mt:"-15px"}}>
                        <TextField
                          label="Nombre de la referencia"
                          type="text"
                          placeholder="Nombre de la referencia"
                          fullWidth
                          // value={nameRP}
                          //  name="nameRP"
                          // onChange={onInputChange}
                          // error={!!nameRPValid && formSubmitted}
                          // helperText={nameRPValid}
                        />
                      </Grid>
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 5, mb: -4 }}
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
                        sx={{ alignItems: "center" }}
                      >
                        <TextField
                          label="Latitud "
                          type="stateplace"
                          placeholder="Latitud"
                          width="60vh"
                          sx={{ mr: 2 }}
                          // value={latitudeRP}
                          // name="latitudeRP"
                          // onChange={onInputChange}
                          // error={!!latitudeRPValid && formSubmitted}
                          // helperText={latitudeRPValid}
                        />
                        <TextField
                          label="Longitud"
                          type="stateplace"
                          placeholder="Longitud"
                          width="60vh"
                          // value={lenghtRP}
                          // name="lenghtRP"
                          // onChange={onInputChange}
                          // error={!!lenghtRPValid && formSubmitted}
                          // helperText={lenghtRPValid}
                        />
                      </Grid>
                    </Grid>
                  </form>
</Box>

<Box sx={{ ...commonStyles,  borderColor: 'primary.main' }}>

                  <form 
                  className="formReference"
                  // onSubmit={onSubmit}
                  >
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        mb: 1,
                        width: "100%",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                          variant="body1"
                          sx={{ alignItems: "center" , mt:"30px"}}
                        >
                          Referencia 2
                        </Typography>

                      <Grid container padding={5} height={60} sx={{ mt:"-15px"}}>
                        <TextField
                          label="Nombre de la referencia"
                          type="text"
                          placeholder="Nombre de la referencia"
                          fullWidth
                          // value={nameRP}
                          //  name="nameRP"
                          // onChange={onInputChange}
                          // error={!!nameRPValid && formSubmitted}
                          // helperText={nameRPValid}
                        />
                      </Grid>
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 5, mb: -4 }}
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
                        sx={{ alignItems: "center" }}
                      >
                        <TextField
                          label="Latitud "
                          type="stateplace"
                          placeholder="Latitud"
                          width="60vh"
                          sx={{ mr: 2 }}
                          // value={latitudeRP}
                          // name="latitudeRP"
                          // onChange={onInputChange}
                          // error={!!latitudeRPValid && formSubmitted}
                          // helperText={latitudeRPValid}
                        />
                        <TextField
                          label="Longitud"
                          type="stateplace"
                          placeholder="Longitud"
                          width="60vh"
                          // value={lenghtRP}
                          // name="lenghtRP"
                          // onChange={onInputChange}
                          // error={!!lenghtRPValid && formSubmitted}
                          // helperText={lenghtRPValid}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  </Box>

                  <Box sx={{ ...commonStyles,  borderColor: 'primary.main' }}>
                  <form
                  // onSubmit={onSubmit}
                  >
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        mb: 1,
                        width: "100%",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                          variant="body1"
                          sx={{ alignItems: "center" , mt:"30px"}}
                        >
                          Referencia 3
                        </Typography>

                      <Grid container padding={5} height={60} sx={{ mt:"-15px"}}>
                        <TextField
                          label="Nombre de la referencia"
                          type="text"
                          placeholder="Nombre de la referencia"
                          fullWidth
                          // value={nameRP}
                          //  name="nameRP"
                          // onChange={onInputChange}
                          // error={!!nameRPValid && formSubmitted}
                          // helperText={nameRPValid}
                        />
                      </Grid>
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 5, mb: -4 }}
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
                        sx={{ alignItems: "center" }}
                      >
                        <TextField
                          label="Latitud "
                          type="stateplace"
                          placeholder="Latitud"
                          width="60vh"
                          sx={{ mr: 2 }}
                          // value={latitudeRP}
                          // name="latitudeRP"
                          // onChange={onInputChange}
                          // error={!!latitudeRPValid && formSubmitted}
                          // helperText={latitudeRPValid}
                        />
                        <TextField
                          label="Longitud"
                          type="stateplace"
                          placeholder="Longitud"
                          width="60vh"
                          // value={lenghtRP}
                          // name="lenghtRP"
                          // onChange={onInputChange}
                          // error={!!lenghtRPValid && formSubmitted}
                          // helperText={lenghtRPValid}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  </Box>

                </Grid>
              </Grid>
            </Grid>


        <Grid 
        container 
        justifyContent="center"
        >
          <Grid 
          container 
          justifyContent="center" 
          width={"60vh"} height={"5vh"}
          sx={{
            mt: 8,
            mb: 10
          }}
          >
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              justifyContent="center"
              fullWidth
              // onClick={handleSave}
            >
              Actualizar lugar
            </Button>
          </Grid>
        </Grid>
      </div>
}

      <Footer />
    </>
  );
};
