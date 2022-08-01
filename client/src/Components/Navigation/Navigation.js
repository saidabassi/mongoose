import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
    <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mern APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default Navigation