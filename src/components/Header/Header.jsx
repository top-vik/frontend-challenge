import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
                <Link to="/" className="text-white p-2 text-decoration-none">Все котики</Link>
                <Link to="/favourite" className="text-white p-2 text-decoration-none">Любимые котики</Link>
            </Nav>
          </Container>
        </Navbar>           
    )
}

export default Header;