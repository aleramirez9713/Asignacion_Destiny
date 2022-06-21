import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardPlace from "./CardPlace";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GridPlaces() {
  return (
    <>
      <Grid container padding={1} spacing={2} sx={{ mb: 2, mt: 1 }}>
        {["1", "2", "3", "4"].map((text) => (
          <Grid
            item
            key={text}
            xs={12}
            md={6}
            lg={4}
            sx={{ mb: 2, mt: 1 }}
            alignContent="center"
          >
            <CardPlace />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
