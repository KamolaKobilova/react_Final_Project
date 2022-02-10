import React from 'react';
import './Banner.css'

export default function Banner() {
  return <div>
      <div className="body">
          <h2>It’s a Big World <br />
         Out There, Go <br />
         Explore  </h2>
      </div>
      <div className="text">
        <h4>Conveniently customize proactive web services for leveraged without <br />
continualliery aggregate fricctionle ou wellies richard.and very <br />
customize  continually.</h4> <br />
       <div className="btnss">
        <button className='bt yellow'>Get Exploration</button>
        <button className='bt white'>Read more</button>
      </div>
      </div>
   <div className="book">
  
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 View
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div className="main">
            <div className="ul">
              <button className="ul_item"><a href="#hotel">Hotel</a></button>
              <button className="ul_item"><a href="#flight">Flight</a></button>
              <button className="ul_item"><a href="#car">Car</a></button>
              <button className="ul_item"><a href="#ship">Ship</a></button>
            </div>
            <section id="hotel">
              <label htmlFor="input">fgdf</label>
               <input type="text" />
              <label htmlFor="input">fgdf</label>
               <input type="text" />

            </section>
         </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
   </div>
  </div>;
}
