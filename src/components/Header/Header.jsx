import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Все котики</Nav.Link>
              <Nav.Link href="/favourite">Любимые котики</Nav.Link>
            </Nav>
          </Container>
        </Navbar>           
    )
}

export default Header;