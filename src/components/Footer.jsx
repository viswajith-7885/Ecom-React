import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-dark">
    <Container>
    <hr className='my-5'/>
      <Row>
        <Col md={6}>
          <h4>About Us</h4>
          <p>
          We take pride in working with renowned shoe brands and designers who share our commitment to excellence. Each pair of shoes available on our website has been carefully selected for its superior craftsmanship, quality materials, and attention to detail. We believe that every customer deserves the best, and we strive to provide you with a premium shopping experience.          </p>
        </Col>
        <Col md={3}>
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>Email: plashoe@0081.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 1234 Main St, City, State ZIP</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4>Follow Us</h4>
          <ul className="list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer