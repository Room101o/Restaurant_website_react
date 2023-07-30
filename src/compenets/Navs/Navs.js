import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import logo from './../../imgs/logo.png';
const Navs = ()=>{
    return(
        <div className="header">

            <Navbar expand="lg" className="container" >
            <Container fluid>
            <Navbar.Brand href="#" className="logo">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="nave mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us </Nav.Link>
                <Nav.Link href="#action3">Explore Foods</Nav.Link> 
                <Nav.Link href="#action6" >Reviews</Nav.Link>
                <Nav.Link href="#action5">FAQ </Nav.Link>
            </Nav>
            <button className="addProduct"><FontAwesomeIcon icon={faShoppingBasket} /></button>
            
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}
export default Navs;