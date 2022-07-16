import Footer from "../../../../ui/Footer";
import NavBar from "../../../../ui/NavBar";
import  React ,{useState,useEffect}from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterD } from "react-router-dom";
import { CircularProgress, Grid, List, ListItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MapPlace } from "../components/MapPlace";
import { useDestinyStore } from "../../../../hooks";
import { useParams,Navigate ,useNavigate} from 'react-router-dom'
import { getPlacesById } from "../../../../hooks/API/Get";
import { deletePlace } from "../../../../hooks/API/Delete";
import {useFormPlace} from "../../../../context/placeContext"


export const DetailPlace = () => {

  const { dataPlace, setdataPlace} = useFormPlace();

  const { places, setActivePlace } = useDestinyStore();

  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);

const getData = async () => {
  let response = await getPlacesById(id)
if (data!=={}) {
  setLoading(false);
}

  setdata(response)
  setdataPlace(response)
};


useEffect(() => {
  getData();
}, []);

const handleDelete = async () => {
  let response = await deletePlace(id)
  navigate('/')
}

  return (
    <>
      <NavBar />
     
{loading ? ( <CircularProgress color='warning' />):
      <Grid container padding={1} spacing={2} sx={{ mb: 2, mt: 1 }}>
       
          <Grid
            item
            key={data.id}
            xs={12}
            md={12}
            lg={12}
            sx={{ mb: 2, mt: 1 }}
            alignContent="center"
          >
            <CardContent>
              <Grid container justifyContent="center" sx={{ mb: 2 }}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  color="divider"
                >
                  {data.name}
                </Typography>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="center"
                justifyItems="center"
                spacing={10}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="divider"
                  >
                    Datos generales
                  </Typography>

                  <Typography variant="h6" sx={{ ml: 2 }}>
                    Descripción: {data.description}
                  </Typography>

                  <Typography variant="h6" sx={{ ml: 2 }}>
                    Estado: {data.availability}
                  </Typography>

                  <Typography variant="h6" sx={{ ml: 2 }}>
                    Tipo de lugar: {data.typePlace}
                  </Typography>

                  <Typography variant="h6" sx={{ ml: 2 }}>
                    Ubicación: ({data.latitude}, {data.lenghtPlace})
                  </Typography>
                </Grid>
                { data.referencePoints ?
               <Grid item>
                  <List>
                    <ListItem></ListItem>
                  </List>
                  <Typography variant="h6" color="divider">
                    Puntos de referencia:
                  </Typography>
                           
           
                  {data.referencePoints.map((point) => (
                    <Grid
                    item
                    key={point}
                    xs={12}
                    md={12}
                    lg={12}
                    sx={{ mb: 2, mt: 1 }}
                    alignContent="center"
                  >
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Nombre: {point.nameRP}
                    </Typography>
                    <Typography variant="h6" sx={{ ml: 4 }}>
                    Ubicación: ( {point.latitudeRP}, {point.lenghtRP})
                    </Typography>

                    </Grid>
                  ))}
                  
            
                </Grid> 
                :"" }
                <Grid item>
                  <Button
                    component={RouterD}
                    to={`/place/detail/${data.id}/edit`}
                    color="secondary"
                    sx={{ padding: 2 }}
                  >
                    <EditIcon sx={{ fontSize: 30, mr: 1 }} />
                    Editar
                  </Button>

                  <Button color="error" sx={{ padding: 2 }}onClick={handleDelete}>
                    <DeleteIcon sx={{ fontSize: 30, mr: 1 }} />
                    Eliminar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>

            <Grid container justifyContent="center" sx={{ mb: 2, mt: 5 }}>
              <Card sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                <MapPlace places={data} />
              </Card>
            </Grid>
          </Grid>
      
      </Grid>

}
      <Footer />
    </>
  );
};
