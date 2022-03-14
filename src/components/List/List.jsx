import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid,Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import useStyles from './style';
import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = ({ childClicked}) =>  {
  const classes = useStyles();
  const [type, setType] = useState('restaurant');
  const [rating, setRating] = useState('');
   console.log({childClicked});
  const places = [
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
  ]

  return (
   <div className={classes.container}>
      <Typography variant='4'><h2>Restaurants, Hotels $ Attractions around you</h2></Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type </InputLabel>
         <Select value={type} onChange={(e) => setType(e.target.value)}>
           <MenuItem value="restaurants">Restaurants</MenuItem>
           <MenuItem value="hotel">Hotels</MenuItem>
           <MenuItem value="attraction">Attractions</MenuItem>
         </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating </InputLabel>
         <Select value={rating} onChange={(e) => setRating(e.target.value)}>
           <MenuItem value={0}>All </MenuItem>
           <MenuItem value={3}>Above 3.0</MenuItem>
           <MenuItem value={4}>Above 4.0</MenuItem>
           <MenuItem value={4.5}>Above 4.5</MenuItem>
         </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
             <Grid item key={i} xs={12}>
                <PlaceDetails place={place}/>
             </Grid>
          ))}
      </Grid>
   </div>
  )
}

export default List