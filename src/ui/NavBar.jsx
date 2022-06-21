import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logoblanco from '../../assets/logoblanco.png';
import { Link as RouterD } from "react-router-dom";
import { Container, Menu, MenuItem, Link } from '@mui/material';
import { AccountCircle } from "@mui/icons-material";





export default function NavBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {
        setAuth(event.target.checked);
      };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'primary', flexGrow: 1}}>
        <Toolbar>
        <RouterD to="/" >
        <IconButton className='cat'>
            <img 
            src={logoblanco} />
            </IconButton>
            </RouterD>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>


          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
             
                 <MenuItem component={RouterD}  to="/auth/login">Iniciar sesión</MenuItem>
  
                 <MenuItem component={ RouterD } to="/auth/register">Registrarse</MenuItem>
              </Menu>
            </div>
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}



