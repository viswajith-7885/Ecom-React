import React, { useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';
import { Context } from './context';
import './style.css'
import './collection.css'


function Collection() {
  
  const pro=useContext(Context)
  const {product}=pro
 
  
    const nav = useNavigate();
 
  
  return (
    <div className='boss'>
    
    <h2 style={{textAlign:'center'}} className='hedding'>COLLECTION</h2>
    <div className='d-flex flex-column container '>
    <div className='manager'>
    <div className="row gap-2 " >
  
  {product.map((e)=>(
    <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0 mx-auto" style={{ width: '20rem' }}>
    <Card.Img className='image' variant="top" src={e.image} />
    <Card.Body style={{textAlign:'center'}}>
      <Card.Text>
      {e.title}
      </Card.Text>
      <h5>₹{e.price}</h5>
      <Button className='view-btn' onClick={()=>nav(`/view/${e.id}`)} variant="primary">View Product</Button>
    </Card.Body>
  </Card>
    
  ))}    
  </div>
  </div>
    </div>
    </div>
    

  )
}

export default Collection