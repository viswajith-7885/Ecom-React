import React, { useContext, useRef } from 'react'
import { Context } from '../context'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Addproduct() {
    const nav =useNavigate(null)
    const pro=useContext(Context)
    const{product,setproduct}=pro
    const myref = useRef(null)

    const productadd=()=>{
        const id = parseInt(myref.current.id.value)
        const model = myref.current.model.value
        const title = myref.current.title.value
        const price = myref.current.price.value
        const image = myref.current.image.value
      const ifDataExist=product.filter((e)=>e.id===id)
      if(ifDataExist.length>0){
        alert('id is already exist')
      }else{

        setproduct([...product,{id,model,title,price,image}])
        console.log(product);
        nav('/admin/col')
        
      }
    }
   
  return (
    <Form ref={myref} onSubmit={(e)=>{e.preventDefault()}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>id</Form.Label>
        <Form.Control name='id' type='number' placeholder="enter id" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>model</Form.Label>
        <Form.Control name='model'  placeholder="enter model" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>title</Form.Label>
        <Form.Control name='title'  placeholder="enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control name='price'  placeholder="enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>image</Form.Label>
        <Form.Control name='image'  placeholder="enter price" />
      </Form.Group>
      <Button variant="primary" onClick={productadd} type="submit">
        Addproduct
      </Button>
    </Form>
  )
}

export default Addproduct