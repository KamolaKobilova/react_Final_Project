import React from 'react';
import left from '../../assets/22.png'
import './More.css';
import right1 from '../../assets/11.png'
import right2 from '../../assets/33.png'
import { orange } from '@material-ui/core/colors';
import star from '../../assets/star.png'
import foot from '../../assets/foot.png'

export default function More() {
  

  return (
    <div>
       <div className="news">
         <h1>An Insights <br /> increadible from <br /> the world</h1>
       <img src={left}/>
       <div className="right">
         <img style={{width: 200}} src={right2} /><br />
         <img style={{width: 200}} src={right1} />
       </div>
         <div className="text_right">
             <div className="text_item">
             <h3>The quirkiest roadside curiosities to inspire your next road trip.</h3>
             <h6>Explore this playful round-up of 16 amusing stays that double as roadside attractions for your next road trip in the United States. </h6><br />
             <h5 className='h5'>read more ...</h5>
             </div>
             <div className="text_item2">
             <h3>The quirkiest roadside curiosities to inspire your next road trip.</h3>
             <h6>Explore this playful round-up of 16 amusing stays that double as roadside attractions for your next road trip in the United States. </h6><br />
             <h5 className='h5'>read more ...</h5>
             </div>
          
         </div>
         <div className="part">
           <h1>We announces partnership with UNESCO to promote cultural tourism</h1>
           <h5 className='h5'>read more ...</h5>
         </div>
         <div className="testimonal">
           <h4 className='h5'>Testimonals</h4>
          <h1 className='larger'>What people says about us</h1>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="item">
               <img src={star}/>
              <p style={{width: 284, fontSize: 16}}>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.</p>
               <img style={{width: 200}} src={foot} />
            </div>
          </div>
          <div className="box">
            <div className="item">
               <img src={star}/>
              <p style={{width: 284, fontSize: 16}}>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.</p>
               <img style={{width: 200}} src={foot} />
            </div>
          </div>
          <div className="box">
            <div className="item">
               <img src={star}/>
              <p style={{width: 284, fontSize: 16}}>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.</p>
               <img style={{width: 200}} src={foot} />
            </div>
          </div>
         
        </div>
        <div className="footer">
          <h1>Subscribe to get lastest news update</h1>
          <h5>We recommended you to subscribe to our newspaper, enter your email below to 
              <h5 style={{marginLeft: 200}}>get our daily update about us.</h5>
          </h5> <br />
          <input type="text" placeholder='Enter your email address' />

      
       </div>
       <div className="last">
            <div className="last_item">
               <li>Product</li>
               <li>Overview</li>
               <li>Pricing</li>
               <li>Releases</li>
            </div>
            <div className="last_item">
              <li>Company</li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </div>
            <div className="last_item">
              <li>Legal</li>
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
              <li>Law Enforcement</li>
              <li>Status</li>
            </div>
            <div className="last_item">
              <li>Follow us</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </div>
          </div>
       
           @2020 Dolano Inc. All right reserved

        </div>
        
       


    </div>
  )
}
