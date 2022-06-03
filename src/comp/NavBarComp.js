import React from 'react';
import { Navbar, Container, Nav, NavDropdown, } from "react-bootstrap"


const NavBarComp = ({}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="home">Budyn's  Clutch Solution</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="shop">Shop</Nav.Link>
      <Nav.Link href="pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="projects">Our Projects</NavDropdown.Item>
        <NavDropdown.Item href="projectsOur">Client's Projects</NavDropdown.Item>
        <NavDropdown.Item href="fanpage">Fanpage</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="partners">Partners</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="contact">Contact</Nav.Link>
      <Nav.Link href="login">Log in</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBarComp;
