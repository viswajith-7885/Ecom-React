import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';

function Editproduct() {
    const nav= useNavigate(null)
    const myref=useRef(null)
    const add=useContext(Context)
    const {edit,setproduct,product}=add
    
    const editHandle =()=>{
      const cloneproduct=[...product]
      const [editdata]=edit;
      let positionofobj;
      cloneproduct.forEach((element,index)=>{
        if(element.id===parseInt(editdata.id)){
          positionofobj =index;
        }
      })
        cloneproduct[positionofobj].id=parseInt(myref.current.id.value)
        cloneproduct[positionofobj].model= myref.current.model.value
        cloneproduct[positionofobj].title=  myref.current.title.value
        cloneproduct[positionofobj].price=  myref.current.price.value
        cloneproduct[positionofobj].image=   myref.current.image.value
          
        setproduct(cloneproduct)
        console.log(cloneproduct);
        nav('/admin/search')
    }
    const CancelHandle =()=>{
      nav('/admin/search')
    }
  return (
    <div>
    {edit.map((item)=>(
    <Form ref={myref} onSubmit={(e)=>{e.preventDefault()}}>
   
        
   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>id</Form.Label>
        <Form.Control name='id' type='number' defaultValue={item.id} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>model</Form.Label>
        <Form.Control defaultValue={item.model} name='model'   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>title</Form.Label>
        <Form.Control name='title'  defaultValue={item.title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control name='price'  defaultValue={item.price} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>image</Form.Label>
        <Form.Control name='image'  defaultValue={item.image} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={editHandle}>
        Update
      </Button>
      <Button className='ms-4' variant='danger' onClick={CancelHandle} >Cancel</Button>

    </Form>
    ))}
    </div>
  )
}

export default Editproduct