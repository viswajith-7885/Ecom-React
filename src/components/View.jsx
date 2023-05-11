import React, { useContext } from "react";
import { shoeData } from "./products";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Context } from "./context";
import './view.css'

function View() {
  const nav =useNavigate()
  const ctxData = useContext(Context);
  const { id } = useParams();
  const { carts, setstate,conform} = ctxData;


  const data = shoeData.filter((e) => e.id === parseInt(id));
  console.log(id);

  const cart = () => {
    
    console.log(carts, 'this is state')
    const ifDataExist = carts.filter(e => e.id === parseInt(id))
    let [newData] = data;

    ifDataExist.length>0?alert('Product already exist'):
    conform?setstate((prevstate) => [...prevstate, newData])
    :nav('/login')
   
  };

  return (
    <div className="booss">
    <div className="kutti">
    
    <div className="anna" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {data.map((e) => (
        <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0 mx-auto" bg="light" text="dark" style={{ width: '30rem', margin: '2rem' }}>
          <Card.Img
            variant="top"
            src={e.image}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>{e.model}</Card.Text>
            <Card.Title> ₹{e.price}</Card.Title>
            <p>shiping<br/>Auctor eros suspendisse tellus venenatis</p>
            <Button className="btn-cart" onClick={cart} variant="primary">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
    </div>
  );
}

export default View;
