import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import { Link as RouterD } from "react-router-dom";
import {  Grid, Divider } from "@mui/material";

export default function Footer() {
  return (
    <>
     <Divider sx={{  mt: 2 }}/>
    <Grid container padding={1} spacing={2} sx={{ mb: 2, mt: 1 }}  textAlign="center">
          <Grid
            item
            sx={{ mb: 2, mt: 1 , width: "100%", height: "100%" }}
            alignContent="center"
          >
       <RouterD to="/">
     <IconButton className="cat">
    <img src={logo} />
       </IconButton>
     </RouterD>
     <Typography 
              variant="body1"
              color="secondary"
              sx={{
                width:  "auto" ,
                padding: 0,
                mb: 1,
              }}
            >
              Derechos reservados - 2022 
            </Typography>
          </Grid>
 
      </Grid>
    </>
   
  );
}
