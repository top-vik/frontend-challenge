import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
                <Link to="/" className={styles.link}>Все котики</Link>
                <Link to="/favourite" className={styles.link}>Любимые котики</Link>
            </Nav>
          </Container>
        </Navbar>           
    )
}

export default Header;