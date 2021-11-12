import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {HashLink} from 'react-router-hash-link'

const Header = () => {
    const {user, logOut} = useAuth()
    console.log(user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="md">
                <Container>
                <Navbar.Brand href="#home">Travel Bangladesh</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#photoGallery">Photo Gallery</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#whyChoose">Why Choose</Nav.Link>
                    
                    {user?.email ? 
                        <div className = "manage-items">
                            <Button onClick={logOut} variant="light">Logout</Button>
                            <Nav.Link as={Link} to="/addService">Add a new Service</Nav.Link>
                            <Nav.Link as={Link} to="/manageAllServices">Manage All Services</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        </div>
                         :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                    <small className = "mx-1">{user?.displayName}</small>
                    <small>{user?.email}</small>
                    <img className = "mx-1" src={user?.photoURL} alt="" />
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;