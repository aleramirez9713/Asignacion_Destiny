import React from "react";
import {
  GoogleMap,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import {Typography } from "@mui/material";
import { Marker } from "@react-google-maps/api";
import mapStyles from "../../../../mapStyles";
import { color } from "@mui/system";

const containerStyle = {
  width: "100vh",
  height: "500px",
};

const centers = [
  {
    lat: 14.1,
    lng: -87.2167,
  },
  {
    lat: 15.1,
    lng: -87.2007,
  },
];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export const MapPlace = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSq_3C4tfeMTc5K1zJWEEKbaDD0jJ6R5A",
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // useEffect(() => {
  //   // Creamos una función para actualizar el estado con el clientWidth
  //   const updateWidth = () => {
  //     const width = document.body.clientWidth
  //     console.log(`updateWidth con ${width}`)
  //     setWidth(width)
  //   })
  const onMapMarker = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Cargando...";

  return (
    <div>
      <Typography
      variant = "subtitle1" > Click en el mapa para ver la ubicación </Typography>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={centers[0]}
        loadingElement={<p> Cargando </p>}
        zoom={8}
        onClick={onMapMarker}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: 14.1, lng: -87.2167 }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `../assets/IconPlaceRed.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(40, 50),
            }}
          />
        ))}

        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: 14.5, lng: -87.67 }}
            onClick={() => {
              setSelected(marker);
            }}
         
            icon={{
              url: `../assets/IconMarker2.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 50),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🔎
                </span>{" "}
                Iglesia de Comayagua
              </h2>
              <p>Disponible</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
