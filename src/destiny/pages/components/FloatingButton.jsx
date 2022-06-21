import * as React from "react";
import { AddOutlined } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

export default function FloatingButton() {
  return (
    <>
    <Fab  component={Link} to="/place/register"
      size="large"
    color="secondary" aria-label="add"
    sx={{
      position: "fixed",
      right: 40,
      bottom: 60,
    }}
     >
  <AddIcon 
  sx={{ fontSize:30}}
  />
</Fab>
    
    </>
  );
}


