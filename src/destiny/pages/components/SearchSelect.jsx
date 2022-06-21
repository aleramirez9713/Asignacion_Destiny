import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField } from "@mui/material";

export default function SearchSelect() {
  const [Type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (

      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="select-type-label">Tipo</InputLabel>
          <Select
            labelId="select-type-label"
            id="select-type"
            value={Type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={1}>Iglesias</MenuItem>
            <MenuItem value={2}>Restaurantes</MenuItem>
            <MenuItem value={3}>Todas</MenuItem>
          </Select>
        </FormControl>
      </Box>
   
  );
}
