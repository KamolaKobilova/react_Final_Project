///
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./style";

function Map({ setCoordinates, setBounds, coordinates }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("min-width: 600px ");
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
        //   onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
