import React,{useState,useEffect}from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterD } from "react-router-dom";
import { useDestinyStore } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces } from "../../../hooks/API/Get";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




export default function GridPlaces( ) {



  const { places, setActivePlace } = useDestinyStore();
  const [data, setdata] = useState([]);

  const onSelectPlace = () => {
  setActivePlace( places ) 
  }


  const getData = async () => {
    let response = await getPlaces()
    setdata(response)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container padding={1} spacing={2} sx={{ mb: 2, mt: 1 }}>
     
        {
        data.map((place) => (
          <Grid
            item
            key={place.id}
            xs={12}
            md={6}
            lg={4}
            sx={{ mb: 2, mt: 1 }}
            alignContent="center"
          >
             <Card >
      <CardMedia
        component="img"
        alt="iglesia"
        height="140"
        image="../assets/map2.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Estado: {place.availability}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Tipo: {place.typePlace}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        Puntos de referencia: {place.referencePoints}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button 
        component={ RouterD } to={`/place/detail/${place.id}`}
        size="small" 
        variant='outlined' 
        color="primary" 
        onClick={ onSelectPlace }
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
