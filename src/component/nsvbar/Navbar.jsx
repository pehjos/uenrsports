import Container from 'react-bootstrap/Container';
import React,{useState} from 'react'
import { useStateValue } from "../../stateprovider";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import {Search} from 'react-bootstrap-icons'
import { TranslatorProvider, useTranslate } from "react-translate"
import {Link} from 'react-router-dom'
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
            <Nav.Link >
           <Link className='link' to="/">HOME</Link>
           </Nav.Link >
               {/* DROP DOWN 1 */}
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">

              <NavDropdown.Item  >
              <Link className='link' to="/article">WRITE ARTICLE</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item href="rent">
              
                <Link className='link' to="/rent">  RENT SCHOOL FIELD</Link>   
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NEWS" id="basic-nav-dropdown">
              <NavDropdown.Item >
           
              <Link className='link' to="/ball">  FOOTBALL</Link>   
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className='link' to="/volley">VOLLEYBALL</Link>  
              </NavDropdown.Item>
              
              <NavDropdown.Item >
              <Link className='link' to="/basket">BASKETBALL</Link>  
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MATCH" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Link className='link' to="/schedule">SCHEDULE</Link>  
                </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className='link' to="/highlights">HIGHLIGHTS</Link>  
              </NavDropdown.Item>
              
              <NavDropdown.Item >
              <Link className='link' to="/news">NEWS</Link>  
                </NavDropdown.Item>
  
            </NavDropdown>
            <NavDropdown title="PLAYERS" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Link className='link' to="/football">FOOTBALL</Link>  
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className='link' to="/basketball">BASKETBALL</Link>  
              </NavDropdown.Item>
              
              <NavDropdown.Item >
              <Link className='link' to="/volleyball">VOLLEYBALL</Link>  
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HIGHLIGHTS" id="basic-nav-dropdown">
              <NavDropdown.Item >
                
              <Link className='link' to="/highlights">ALL SPORTS</Link>  
                </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link >
            <Link className='link' to="/contact">CONTACT US</Link>  
              
              </Nav.Link>
           
   
            <Nav.Link >  <Link className='link' to="/about">ABOUT US</Link>  </Nav.Link>
         {!user?(<Nav.Link >  <Link className='link' to="/schedule">LOGIN</Link>  </Nav.Link>):(<Nav.Link >

           <Link className='link' to="/home"> {user?.result.name}</Link>  
           </Nav.Link>)} 
          </Nav>
        </Navbar.Collapse>
  
        <Nav.Link href="/search"> 
        <Link className='link' to="/search"><Search/></Link>  

        </Nav.Link>
    
      </Container>
    </Navbar>

  );
}

export default Navbarcomponent;
