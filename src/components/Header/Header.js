import React from 'react';
import { Navbar,Container,Nav,DropdownButton,Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const logout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    alert('successfully logout');
    history.push('/home');
  }
    return (
        <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <DropdownButton id="dropdown-basic-button" title="Profile">
      <Dropdown.Item href="/profile"> My Profile</Dropdown.Item>
  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
  </DropdownButton>
    </Nav>
    </Container>
  </Navbar> 
        </>
    )
}
