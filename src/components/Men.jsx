import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./style.css"
import { Context } from './context';
import './collection.css'
 

function Men() {
  const add = useContext(Context)
  const {product}= add
 const nav=useNavigate()
 
  const menfilter=product.filter((e)=>e.model==='men')
  return (
    <div className='boss'>
    <h2 style={{textAlign:'center'}} className='hedding'>MEN</h2>
    <div className='d-flex  flex-column container'>
    
    <div className='manager'>
    <div className="row gap-3">
    {menfilter.map((e)=>(
      <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0 mx-auto"
      style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src={e.image} />
      <Card.Body style={{textAlign:"center"}}>
       
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

export default Men