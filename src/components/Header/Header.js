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
      <Dropdown.Item href="/changepassword">Change Password</Dropdown.Item>
  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
  </DropdownButton>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search Your Friend" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    </Nav>
    </Container>
  </Navbar> 
        </>
    )
}
