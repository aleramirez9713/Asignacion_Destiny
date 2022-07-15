import * as React from "react";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button
} from "@mui/material";
import { useState } from "react";
import { useForm } from "../../../../hooks";

const formData = {
  namePlace: "",
  descriptionPlace: "",
  latitudePlace: "",
  lenghtPlace: "",
};

const formValidations = {
  namePlace: [(value) => value.length >= 1, "El nombre es obligatorio."],
  descriptionPlace: [
    (value) => value.length >= 1,
    "La descripción es obligatorio.",
  ],
  latitudePlace: [(value) => value.length >= 1, "Campo obligatorio."],
  lenghtPlace: [(value) => value.length >= 1, "Campo obligatorio."],
};

export const DataForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [typePlace, setType] = React.useState("");

  const [statePlace, setState] = React.useState("");

  const {
    formState,
    namePlace,
    descriptionPlace,
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
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
  };

  return (
    <Grid
      container
      direction="column"
      xl={8}
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
            mb: 1,
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
            Ingrese los datos generales del lugar
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
                <MenuItem value={1}>Iglesia</MenuItem>
                <MenuItem value={2}>Restaurante</MenuItem>
                <MenuItem value={3}>Colonia</MenuItem>
                <MenuItem value={4}>Parque</MenuItem>
                <MenuItem value={5}>Centro gubernamental</MenuItem>
                <MenuItem value={6}>Centro de estudio</MenuItem>
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
          justifyContent= "center"
          >
          {/* <Button
          color="secondary"
          type="submit"
          variant="contained">
            Guardar datos
          </Button> */}
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
