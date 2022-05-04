import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    return (

        <nav>
            <div className='logo-img'>
                <img src='https://i.ibb.co/R0GKjB4/logo-alt.png' alt="" />
            </div>

            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
                <Container>
                    <Navbar.Brand to='/home' 
                    style={{
                        'color':'rgb(228, 26, 26)',"height": "60px", "font-size": "xx-large" }}

                      as={Link}>
                        MOTOR'S MANIA
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>

                    </Nav>
                    <Nav id='nav'>
                        <Nav.Link to='/blogs' as={Link} >Blogs</Nav.Link>

                        {
                            user ? <>
                                <Link className='btn btn-link text-white text-decoration-none' to='/manageInventories'>Manage Items</Link>
                                <Link className='btn btn-link text-white text-decoration-none' to='/addNewItem'>Add Items</Link>
                                <Link className='btn btn-link text-white text-decoration-none' to='/myitems'>My Items</Link>
                                <button className='btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)} >Signout</button>
                            </> :
                                <Nav.Link to='/login' as={Link} >Login</Nav.Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </nav >



    );
};

export default Header;