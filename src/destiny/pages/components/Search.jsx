import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 5,
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 2,
  width: "60%",
  height: "60px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2.5, 5, 2, 0),
    paddingLeft: 80,
    width: "100%",
  },
}));

export const SearchOption = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <Grid item xs={12} sx={{ mt: 0, ml: 0 }}>
        <StyledInputBase
          label="Buscar"
          type="email"
          placeholder="Buscar"
          fullWidth
        />
      </Grid>
    </Search>
  );
};

