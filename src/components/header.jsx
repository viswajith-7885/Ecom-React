
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCartFill,BsFillPersonFill} from "react-icons/bs";
import { AiOutlineLogout} from "react-icons/ai";
import { Context} from "./context";
import { useContext } from "react";
import { Badge } from 'react-bootstrap';


function NavScrollExample() {
  const nav=useNavigate();
  const add =useContext(Context)
  const {conform,setconform,userData}=add


  const Logout=()=>{
    setconform(false)
    nav('/')

  }
  // console.log(conform);
  // const =data
  return (
    <Navbar bg="light" expand="lg" sticky="top">
    <Navbar sticky="top" />
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className=' ps-5 pe-5' style={{fontSize:'1.5rem', fontFamily:'Poppins,sans-serif', fontWeight:600,}}>P L A S H O E</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to="/men">MEN</Nav.Link>
            <Nav.Link as={Link} to ="/women">WOMEN</Nav.Link>
            <Nav.Link as={Link} to ="/col">COLLECTION</Nav.Link>
            <Nav.Link as={Link} to ="/login/set">ADMIN</Nav.Link>
          
           {conform? <Nav.Link as={Link} to='/cart'><BsFillCartFill/></Nav.Link>:null}
          

          
            
           
          
          </Nav>
          {userData.map((e)=>(
           conform?<Badge>{e.email}</Badge>:null
          ))}
         
          
         {conform?<div onClick={Logout}><AiOutlineLogout/></div>: <Link to='/login'><BsFillPersonFill/></Link>}
          
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
  );
}

export default NavScrollExample;