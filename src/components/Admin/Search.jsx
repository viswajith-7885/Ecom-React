import React, { useContext } from 'react'
import { Context } from '../context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style.css'
import { useNavigate } from 'react-router-dom';
import '../collection.css'
import './search.css'


function Search() {
    const nav =useNavigate()
    const data =useContext(Context)
    const {search,product,setproduct,edit,setedit}=data
    console.log(product);

   
    const remove=(element)=>{
        const pid=parseInt(element.target.id) 
        const filterdata=product.filter((e)=>e.id!==pid)
        console.log(pid);
        setproduct(filterdata)
        console.log(filterdata);
      }
      const edithandle = (element)=>{
        const pid = parseInt(element.target.id)
        const editdata=product.filter((e)=>e.id===pid)
        setedit(editdata)
        console.log(edit);
        nav('/admin/editproduct')
      }


  return (
    <div className='boss'>
    <h2 style={{textAlign:'center'}} className='hedding'>collection</h2>
    <div className='d-flex flex-column container'>
    <div className='manager'>
    <div className='row gap-5'>
    {
       
         product.filter((val)=>{
            if(search ===" "){
                return val;
            }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val;
            }
            return false;
        })
        .map((e)=>(
    <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0 "
      style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src={e.image} />
      <Card.Body style={{textAlign:"center"}}>

        <Card.Text>
         {e.title}
        </Card.Text>
        <h5>₹{e.price}</h5>
        <Button id={e.id} className='btn-dlt' onClick={remove} variant='danger' >delete</Button>
        <Button className='ms-4 btn-edit' id={e.id} variant='primary'  onClick={edithandle}>edit</Button>    
        </Card.Body>
    </Card>
   ))}
   </div>
   </div>
    </div>
    </div>
  )
}

export default Search