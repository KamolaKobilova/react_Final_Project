import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';
 
const   PlaceDetails = ({place }) => {
 const classes = useStyles();
 
  return (
    <Card elevation={6}>
        <CardMedia
            style={{height: 350 }}
            image={place.photo? place.photo.images.large.url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fphotos.smugmug.com%2F3702%2FFood-Photography%2Fi-9tz2Btd%2F0%2F4d218668%2FL%2FEclectica--20-L.jpg&imgrefurl=https%3A%2F%2Fwww.myiconography.com%2FFoodPhotography&tbnid=FzCBzGipwdc-gM&vet=12ahUKEwiM6c7LkLf2AhWL0-AKHTbADbQQMygNegUIARD3AQ..i&docid=PpDKZBkYZCOIzM&w=800&h=534&q=food%20photography&hl=en-GB&ved=2ahUKEwiM6c7LkLf2AhWL0-AKHTbADbQQMygNegUIARD3AQ'}
            title={place.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box display="flex" justifyContent="space-between">
                <Typography variant='subtitle1 '>Price</Typography>
                <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
            </Box>
        </CardContent>
    </Card>
  );
}

export default PlaceDetails