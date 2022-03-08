import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core ';
import LocationOnIcon from '@material-ui/icon/LocationOn';
import  PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating'
function PlaceDetails({place }) {
  console.log(place)
  return (
    <div>{place.name}</div>
  )
}

export default PlaceDetails