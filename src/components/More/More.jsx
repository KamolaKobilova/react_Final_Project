import React from 'react';
import pic from '../../assets/pic1.png'

export default function More(props) {
  console.log(props);

  const renderList = props.contacts.map((contacts)=> {
    return(
      <div className='item'>
           <div className="content">
             <div className="header">{contacts.name} </div>
              <div>{contacts.surName}</div>
           </div>
      </div>
    )
  })
  return (
    <div>
        <div className="mains">
            <div className="picture">
                <img src={pic} className='img_item'/>
                <img src="" className='img_item'/>
            </div>
             <div className="text">
                <h3>
                World Best Travel Agency <br /> Company Since 2008.
                </h3>
                <h1 style={{color: 'black'}}>{renderList()}</h1>
             </div>
        </div>


    </div>
  )
}
