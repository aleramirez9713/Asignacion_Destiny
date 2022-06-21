import { Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logoblanco from '../../../assets/logoblanco.png';


const styles = {
    heroContainer: {
      height: "100%",
      backgroundImage: `url(${"../assets/banderaDIF.png"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };

export const AuthLayout = ({ children, title = "" }) => {

  return (
    <>
        
    <div >

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={styles.heroContainer}
      sx={{ minHeight: "100vh", padding: 4 }}
    >
        <Link to="/" >
        <IconButton className='logoLayout'>
            <img 
            src={logoblanco} />
            </IconButton>
            </Link>
      {/* <img src={logoblanco} /> */}
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>

    </div>
    </>

  );
};
