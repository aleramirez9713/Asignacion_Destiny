import { Grid, TextField } from "@mui/material";
import queryString from 'query-string'
import { useForm } from "../../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getPlaceByName } from "../../../helpers/getPlaceByName";

export const SearchMin = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search );

  const places = getPlaceByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <Grid>
      <form onSubmit={onSearchSubmit}>
        <Grid item sx={{ mr: 2, mb: 2 }} alignContent="center">
          <TextField
            label="Buscar"
            type="searchText"
            placeholder="Buscar"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />
        </Grid>
      </form>
      {
        places.map( place => (
          <Grid
          key= { places.id } {...place} >
    
          </Grid>
        ))
      }
     
    </Grid>
  );
};
