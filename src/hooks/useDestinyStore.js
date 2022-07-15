// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewPlace,
  onSetActivePlace
} from "../store";

export const useDestinyStore = () => {

  const dispatch = useDispatch();
  const { places, activePlace } = useSelector( state => state.destiny);

  const setActivePlace = (placeEvent) => {
    dispatch(onSetActivePlace(placeEvent));
  };

  const startSavingPlace = async (placeEvent) => {
    // TODO: llegar al backend

    // Todo bien
    if (placeEvent._id) {
      // Actualizando
      dispatch(onUpdatePlace({ ...placeEvent }));
    } else {
      // Creando
      dispatch(onAddNewPlace({ ...placeEvent, _id: new Date().getTime() }));
    }
  };


  return {
    //* Propiedades
    activePlace,
    places,
    // hasPlaceSelected: !!activePlace,

    //* Métodos
    setActivePlace,
    startSavingPlace,
  };
};
