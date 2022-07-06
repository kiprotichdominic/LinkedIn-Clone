import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedinIn, FaSearch, FaHome, FaPeopleArrows } from 'react-icons/fa';
import { MdMessage, MdOutlineWork, MdPeopleAlt, MdNotifications } from 'react-icons/md'
import NavbarLinks from '../NavbarLinks/NavbarLinks';

import './NavigationBar.css'

function NavigationBar() {
    return (
        <Navbar className='navigationbar' expand="lg">
            <Container>
                <Navbar.Brand className='navigationbar-logo' href="#">
                    <FaLinkedinIn />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex navigationbar-search">
                            <FaSearch className='navigationbar-search__icon' />
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 navigationbar-search__input"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavbarLinks Icon={FaHome} title="Home" />
                        <NavbarLinks Icon={MdPeopleAlt} title="My Network" />
                        <NavbarLinks Icon={MdOutlineWork} title="Jobs" />
                        <NavbarLinks Icon={MdMessage} title="Messaging" />
                        <NavbarLinks Icon={MdNotifications} title="Notifications" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;