import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import  Header  from './components/Header/Header';
import Banner from './components/Banner/Banner';
import More from './components/More/More';


function App() {
  const contacts = [
    {
      id: "1",
      name: "Kamola",
      surName: "Kobilova"
    },
    {
      id: "2",
      name: "Kamola",
      surName: "Qobilova"
    }

  ]

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Banner/>
        <More contacts={contacts} />
      </BrowserRouter>
      
    </div>
  
  );
}

export default App;
