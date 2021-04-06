import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss'
import Logo from '../assets/images/logo_grayscale.svg'
import ProfilePhoto from '../assets/images/profilephoto.png'
import ButtonElement from './ButtonElement'

function Header(props) {
    return(
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg">
                            <Navbar.Brand href="#home">
                            <img
                                src={Logo}
                                height="auto"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Form inline>
                                        <FormControl className={styles.search} type="text" placeholder="Search" />
                                    </Form>
                                    <div className={styles.profile}>
                                        <img
                                            src={ProfilePhoto}
                                            height="auto"
                                            className="d-inline-block align-top"
                                            alt="Profile Picture"
                                        />
                                    </div>
                                    <NavDropdown title="John Doe" className={styles.dropdown} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#profile">My Account</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#signout">Signout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header