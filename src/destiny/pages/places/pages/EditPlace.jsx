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
import {useNavigate } from 'react-router-dom'
import { useDestinyStore, useForm } from "../../../../hooks";
import { getPlacesById } from "../../../../hooks/API/Get";
import {useFormPlace} from "../../../../context/placeContext"
import Box from "@mui/material/Box";
import { postPlaces } from "../../../../hooks/API/Post";
import { putPlaces } from "../../../../hooks/API/Put";
// import Swal from 'sweetalert2/dist/sweetalert2.js'


const formData = {
  namePlace: "",
  descriptionPlace: "",
  latitudePlace: "",
  lenghtPlace: "",
  referencePoints: [
  ],
};

const formValidations = {
  namePlace: [(value) => value.length >= 1, "El nombre es obligatorio."],
  descriptionPlace: [ (value) => value.length >= 1, "La descripción es obligatoria."],
  latitudePlace: [(value) => value.length >= 1, "Campo obligatorio."],
  lenghtPlace: [(value) => value.length >= 1, "Campo obligatorio."],

};




const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '25rem',
  borderRadius: '16px'
};



export const EditPlace = () => {
  const { dataPlace, setdataPlace} = useFormPlace();

  const { places, setActivePlace } = useDestinyStore();

  const { id } = useParams();

  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [name, setname] = useState(dataPlace.name);
  const [description, setdescription] = useState(dataPlace.description);
  const [availability, setavailability] = useState(dataPlace.availability);
  const [typePlace, settypePlace] = useState(dataPlace.typePlace);
  const [latitude, setlatitude] = useState(dataPlace.latitude);
  const [lenghtPlace, setlenghtPlace] = useState(dataPlace.lenghtPlace);

  const [PR, setPR] = useState();

  const navigate = useNavigate()

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
  


  let body = {}


  const handleChangeType = (event) => {
    settypePlace(event.target.value);
  };

  const handleChangeState = (event) => {
    setavailability(event.target.value);
  };

  const onSubmit = (event) => {
   
  };



const onInputChange = ({ target }) => {
  switch (target.name) {
    case "namePlace":
      setname(target.value);
      break;
      case "descriptionPlace":
        setdescription(target.value);
        break;
        case "latitude":
          setlatitude(target.value);
        break;
        case "lenghtPlace":
          setlenghtPlace(target.value);
          break;
  
    default:
      break;
  }

}


   
  const handleSave = async () => {

    body.name= name,
    body.description = description,
    body.latitude = latitude,
    body.lenghtPlace = lenghtPlace,
    body.typePlace = typePlace,
    body.availability = availability,
    body.referencePoints = dataPlace.referencePoints
    

    let response = await putPlaces(id,body);
    navigate('/')
  };

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
                        value={name}
                        fullWidth
                        name="namePlace"
                        onChange={onInputChange}
                        // error={!!namePlaceValid && formSubmitted}
                        // helperText={namePlaceValid}
                      />
                    </Grid>

                    <Grid container marginBottom={2} padding={5} height={60}>
                      <TextField
                        label="Descripción"
                        type="text"
                        placeholder="Descripción"
                        fullWidth
                        multiline
                        value={description}
                        name="descriptionPlace"
                        onChange={onInputChange}
                        // error={!!descriptionPlaceValid && formSubmitted}
                        // helperText={descriptionPlaceValid}
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
                          value={availability}
                          name="availability"
                        >
                          <MenuItem value={"Disponible"}>Disponible</MenuItem>
                          <MenuItem value={"No disponible"}>No disponible</MenuItem>
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
                          type="typePlace"
                          value={typePlace}
                          placeholder="Type"
                          name="typePlace"
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
                        step="any" 
                        type="number"
                        placeholder="Latitud"
                        width="60vh"
                        sx={{ mr: 2 }}
                        value={latitude}
                        name="latitude"
                        onChange={onInputChange}
                        // error={!!latitudePlaceValid && formSubmitted}
                        // helperText={latitudePlaceValid}
                      />
                      <TextField
                        label="Longitud"
                        step="any" 
                        type="number"
                        placeholder="Longitud"
                        width="60vh"
                        value={lenghtPlace}
                        name="lenghtPlace"
                        onChange={onInputChange}
                        // error={!!lenghtPlaceValid && formSubmitted}
                        // helperText={lenghtPlaceValid}
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
              onClick={handleSave}
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
