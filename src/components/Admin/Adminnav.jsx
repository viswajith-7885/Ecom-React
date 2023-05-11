
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../context';
import { useContext } from 'react';


function Adminnav() {
  const nav =useNavigate()
  const data =useContext(Context);
  const {search,setsearch}=data;

  const changeHandle=(e)=>{
    setsearch(e.target.value);
    console.log(search);
    nav('/admin/search')
  }
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/admin/search'>ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin/userdetail' >USER DETAILS</Nav.Link>
            <Nav.Link as={Link} to='/admin/addproduct' >ADD PRODUCT</Nav.Link>
            <Nav.Link as={Link} to='/' >USER HOME</Nav.Link>
           
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search here....."
              className="me-2"
              aria-label="Search"
              onChange={changeHandle}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Outlet/>
    </div>
  );
}

export default Adminnav;