import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
// import  Header  from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import More from './components/More/More';
import Header_2 from './components/Header_2/Header_2';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <div>
   <BrowserRouter>
      {/* <Header/>
      <Banner/>
      <More/>  */}
       <CssBaseline/>
          <Header_2/>
        <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}> 
             <List/>
          </Grid>
          <Grid item xs={12} md={8}> 
             <Map/>
          </Grid>
        </Grid>

       
      </BrowserRouter>
      
    </div>
  
  );
}

export default App;
