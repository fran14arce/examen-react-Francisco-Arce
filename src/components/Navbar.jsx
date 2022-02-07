import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ElementosNavbar from '../data/ElementosNavbar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {ElementosNavbar.map((item) => {
                <Nav.Link href={item.path}>{item.title}</Nav.Link>
              })}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default Navbar;
