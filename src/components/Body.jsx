import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css'



function Home() {
  return (
    <div>
    <Card className="text-center">

    <Card style={{ width: '18rem' }}></Card>
    <Card.Img variant="top" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"/>
    
    <Card.ImgOverlay className="d-flex align-items-center justify-content-start">

      <div style={{textAlign: 'left'}}>
      <Card.Body>
        <Card.Title style={{color:'white'}}>
        <h1>Love the Planet</h1>
        <h1>we walk on</h1>
          </Card.Title>
        <Card.Text style={{color:'white'}}>
        <p>Bibendum fermentum, aenean donec pretium aliquam blandit</p>
         tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
        </Card.Text>


        
       
      

       
      
      </Card.Body>
      </div>
      </Card.ImgOverlay>
      
    </Card>
    </div>
  )
}

export default Home