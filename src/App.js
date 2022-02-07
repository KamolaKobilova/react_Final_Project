import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import  Header  from './components/Header/Header';
import Banner from './components/Banner/Banner'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Banner/>
      </BrowserRouter>
       
    </div>
  
  );
}

export default App;
