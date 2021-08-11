import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function Header() {
    return (
        <>
           <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="#features">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </>
    )
}
