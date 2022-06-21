import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterD } from "react-router-dom";


export default function CardPlace() {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt="iglesia"
        height="140"
        image="../assets/10.jpg"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Iglesia de Comayagua
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estado: Disponible
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tipo de lugar: Iglesia
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={ RouterD } to="/place/detail" size="small" variant='outlined' color="primary" >Ver más</Button>
      </CardActions>
    </Card>
  );
}
