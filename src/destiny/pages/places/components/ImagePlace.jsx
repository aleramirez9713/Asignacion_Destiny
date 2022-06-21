import { Button, Grid } from "@mui/material";
import { useState } from "react";

export const ImagePlace = ({}) => {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <>
        <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={0}
        sx={{ mt: 5, mb: 0 }}
      >
        <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            onChange={(e) => {
              changeImage(e);
            }}
          />
          <div>
            <div> Seleccionar imagen</div>
          </div>
        </Button>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "300px",
          with: "100%",
          padding: 0,
          alignItems: "center",
          mb: 10,
          mt:5
        }}
      >
        <img src={ImageSelectedPrevious} alt="" />
      </Grid>

    </>
  );
};
