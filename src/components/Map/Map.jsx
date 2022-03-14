///
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";

function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked }) {
  const classes = useStyles();
  const isDesktop  = useMediaQuery("min-width: 600px");
  

  console.log("cord", coordinates);
  let cords = { lat: -34, lng: 151 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        width="400px"
        bootstrapURLKeys={{ key: "AIzaSyCPeLAkle0tIULImvEkStR8xj0pLnEQ5a0" }}
        defaultCenter={cords}
        center={cords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        //   options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
          onChildClick={(child)=> setChildClicked(child)}
      >
        {places?.map((place, i)=> (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
             >
               {
                 !isDesktop ? (
                   <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                 ) : (
                   <Paper elevation={3} className={classes.paper}>
                       <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                          {place.name}
                       </Typography>
                       <img
                         className={classes.pointer}
                         src={place.photo ? place.photo.images.large.url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fphotos.smugmug.com%2F3702%2FFood-Photography%2Fi-9tz2Btd%2F0%2F4d218668%2FL%2FEclectica--20-L.jpg&imgrefurl=https%3A%2F%2Fwww.myiconography.com%2FFoodPhotography&tbnid=FzCBzGipwdc-gM&vet=12ahUKEwiM6c7LkLf2AhWL0-AKHTbADbQQMygNegUIARD3AQ..i&docid=PpDKZBkYZCOIzM&w=800&h=534&q=food%20photography&hl=en-GB&ved=2ahUKEwiM6c7LkLf2AhWL0-AKHTbADbQQMygNegUIARD3AQ'}
                         alt={place.name }
                       />
                       <Rating  value={Number(place.rating)} readOnly/> 
                   </Paper>
                 )
               }

            </div>

        ))}
         </GoogleMapReact>
    </div>
  );
}

export default Map;
