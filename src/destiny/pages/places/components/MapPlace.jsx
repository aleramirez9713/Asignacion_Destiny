import React from "react";
import { GoogleMap, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { Typography } from "@mui/material";
import { Marker } from "@react-google-maps/api";
import mapStyles from "../../../../mapStyles";


export const MapPlace = (props) => {
  const places = props.places;

// const placesPR = places.referencePoints
// console.log('prueba pintos',placesPR);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSq_3C4tfeMTc5K1zJWEEKbaDD0jJ6R5A",
  });
  const [markers, setMarkers] = React.useState([]);
  let position = {}

  const [selected, setSelected] = React.useState(null);

  const containerStyle = {
    width: "100vh",
    height: "500px",
  };


 const latitud =  parseFloat(places.latitude);
 const longitud = parseFloat(places.lenghtPlace);  



  const centers = {
    lat: latitud,
    lng: longitud,
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

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

{/* {props.places.map((point) => {
       console.log('prina',point);
       //       {markers.map((marker) => {
       //   <Marker
       //     key={marker}
       
       //     position={{ lat: latPR , lng: lonPR }}
         
       //     onClick={() => {
       //       setSelected(marker);
       //     }}
       //     icon={{
       //       url: `../assets/IconMarker2.png`,
       //       origin: new window.google.maps.Point(0, 0),
       //       anchor: new window.google.maps.Point(15, 15),
       //       scaledSize: new window.google.maps.Size(30, 50),
       //     }}
       //   />
       // })}
       <Typography variant="subtitle1">
       sdsdsd
     </Typography>
})} */}




      <Typography variant="subtitle1">
        {" "}
        Click en el mapa para ver la ubicación{" "}
      </Typography>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={centers}
        loadingElement={<p> Cargando </p>}
        zoom={8}
        onClick={onMapMarker}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: latitud, lng: longitud }}
            onClick={() => {
              setSelected(marker);
            }}
      
          />
        ))}



{/* 
{placesPR.map((point,i) => {
                  position = {
                  lat:parseFloat(point.latitudeRP),
                  lng:parseFloat(point.lenghtRP)
                }    */}
       
         
 {/* puntos de referencias desppues descomentarlos
 {markers.map((marker) => ( */}
  {/* <Marker
 
    position={position}
    onClick={() => {
      setSelected(marker);
    }}
    icon={{
      url: `../assets/IconMarker2.png`,
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(15, 15),
      scaledSize: new window.google.maps.Size(40, 50),
    }}
  />
))}
               
                })} */}
         
{/* 
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
                {places.namePlace}
              </h2>
              <p>
               {places.availability}
                </p>
            </div>
          </InfoWindow>
        ) : null */}
        
      </GoogleMap>

  
  
    </div>

    

  );
};
