import { createSlice } from "@reduxjs/toolkit";

const tempPlace = {
  
};

export const destinySlice = createSlice({
  name: "destiny",
  initialState: {
    places: [
        tempPlace
    ],
    activePlace: null
  },
  reducers: {
    onSetActivePlace: (state, { payload }) => {
      state.activePlace = payload;
    },
    onAddNewPlace: (state, { payload }) => {
      state.places.push(payload);
      state.activePlace = null;
    },
    
  },
});

//actions
export const { onSetActivePlace, onAddNewPlace} =
  destinySlice.actions;
