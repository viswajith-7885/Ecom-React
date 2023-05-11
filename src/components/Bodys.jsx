import React from 'react'
import Card from 'react-bootstrap/Card';

function Bodys() {
  return (
    <div style={{ width: '100%' }}>
  <div className="ms-5 mt-5 card-img-product" style={{ width: '70%', display: 'flex' }}>
    <Card.Img
    style={{width:'50%'}}
      className='matti-bro'
      variant="top"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
    />
    <div className="d-flex flex-column justify-content-center ms-4">
      <p style={{ textAlign: 'left', color:'#f6aa28' ,  fontFamily: "Poppins,sans-serif", fontSize:'14px' }}>
        A B O U T {'  '} <span> {'  '} U S</span> 
      </p>
      <p style={{ textAlign: 'left'  , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
        Selected materials 
      </p>
      <p style={{ textAlign: 'left' , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
      designed for comfort 
      </p>
      <p style={{ textAlign: 'left' , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
      and sustainability
      </p>
      <p style={{ textAlign: 'left' ,color:'#979a9b', fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      Nullam auctor faucibus ridiculus dignissim sed et 
      </p>
      <p style={{ textAlign: 'left'  ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}> auctor sed eget auctor nec sed elit nunc, magna non </p>
      <p style={{textAlign:'left' ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      urna amet ac neque ut quam enim pretium risus 
      </p>
      <p style={{textAlign:'left' ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      gravida ullamcorper adipiscing at ut magna.
      </p>
      <p style={{ textAlign: 'left' ,color:'#262b2c', fontSize:'14px', fontWeight:'500' }}>
      R E A D {'  '}  M O R E
      <hr className="my-0 " style={{width:'23%', color:'#f6aa28', height:'4px'}}/>
      </p>
    </div>
  </div>
</div>
  )
}

export default Bodys