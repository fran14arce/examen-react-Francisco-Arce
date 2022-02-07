import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ElementosNavbar } from '../data/ElementosNavbar';

class BarraNavegacion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {ElementosNavbar.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}
export default BarraNavegacion;