import Container from 'react-bootstrap/Container';
import React,{useState} from 'react'
import { useStateValue } from "../../stateprovider";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import {Search} from 'react-bootstrap-icons'
import { TranslatorProvider, useTranslate } from "react-translate"

let translations = {
  locale: "en",
  Home: {
    "HELLO": "Helloworld!"
  }
};
 
function Navbarcomponent() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (

    <Navbar  expand="lg">
      <Container>
    
        <Navbar.Brand className='brand' href="/home"><img  width={130} height={30} src='https://sports.uenr.edu.gh/wp-content/uploads/2021/12/uenr-sports-brown-1.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* DROP DOWN 1 */}
            <Nav.Link href="/">HOME</Nav.Link>
               {/* DROP DOWN 1 */}
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">

              <NavDropdown.Item  href="/article">
        WRITE ARTICLE
              </NavDropdown.Item>
              
              <NavDropdown.Item href="rent">RENT SCHOOL FIELD</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NEWS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ball">FOOTBALL</NavDropdown.Item>
              <NavDropdown.Item href="/volley">
 VOLLEYBALL
              </NavDropdown.Item>
              
              <NavDropdown.Item href="basket">BASKETBALL</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MATCH" id="basic-nav-dropdown">
              <NavDropdown.Item href="/schedule">SCHEDULE</NavDropdown.Item>
              <NavDropdown.Item href="/highlights">
HIGHLIGHTS
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/news">NEWS</NavDropdown.Item>
  
            </NavDropdown>
            <NavDropdown title="PLAYERS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/football">FOOTBALL</NavDropdown.Item>
              <NavDropdown.Item href="/basketball">
BASKETBALL
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/volleyvall">VOLLEYBALL</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HIGHLIGHTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/highlights">ALL SPORTS</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
           
   
            <Nav.Link href="/about">ABOUT US</Nav.Link>
         {!user?(<Nav.Link href="/Login">LOGIN</Nav.Link>):(<Nav.Link href="/home">{user?.result.name}</Nav.Link>)} 
          </Nav>
        </Navbar.Collapse>
  
        <Nav.Link href="/search"> <Search/></Nav.Link>
    
      </Container>
    </Navbar>

  );
}

export default Navbarcomponent;