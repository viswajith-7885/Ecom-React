import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  const nav=useNavigate()
  return (
    <div>
    <Card className="text-center">

    <Card style={{ width: '18rem' }}></Card>
    <Card.Img variant="top" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"/>
    
    <Card.ImgOverlay className="d-flex align-items-center justify-content-start">

      <div style={{textAlign: 'left'}}>
      <Card.Body>
    
         
        <Button className='rounded-0 btn-hover mb-5' variant="light" text='dark' size='lg' onClick={()=>{nav('/men')}} >SHOP MEN</Button> 
       
      

        {' '}
        <Button className='ms-4 rounded-0 btn-hover mb-5' variant="light" text='dark' size='lg' onClick={()=>{nav('/women')}}>SHOP WOMEN</Button> 
      
      </Card.Body>
      </div>
      </Card.ImgOverlay>
      
    </Card>
    </div>
  )
}

export default Home