import React from 'react';
import './Header.css';




export default function Header() {
  return <div>
   <div className="container">
    
     <ul className='nav_ul'>
     <div className="explore">
       <h1>Explore</h1>
     </div>
        <li><a href="/">Home</a></li>
        <li><a href="/">Tours</a></li>
        <li><a href="/">Hotel</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Pages</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Log in</a></li>
        <li><button className='btns'>Sign up</button></li>
        
      </ul>
            
   </div>
    
 
      
   
     
  </div>;
}
