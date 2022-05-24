import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const NavStyle = styled.div`
    .navbar{
        
    }

     .navbar-nav{

    }
    .nav-link{

    }

    .navbar-brand{
        font-weight: 400;
        font-size: 3rem;
    }

    img{

    }

    a{
        padding: 5px 15px;

        &:hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #DAF0DE !important;
         }
    }
`;

const NavBar = () => {
  return (
      <NavStyle>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
              <Container>
                  <Navbar.Brand href="#home">Julio Paniagua-Alanis</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                      </Nav>
                      <Nav>
                          <Nav.Item >
                              <a style={{color:'#fff'}} href="https://github.com/jpaniag2" target="_blank"><FaGithub size='3rem' /></a>
                          </Nav.Item>
                          <Nav.Item>
                              <a style={{color:'#fff'}} href="https://www.linkedin.com/in/juliopaniaguaalanis/" target="_blank"><FaLinkedin size='3rem' /></a>
                          </Nav.Item>

                          <Nav.Link eventKey={2} href="#memes">
                              
                          </Nav.Link>
                          <NavDropdown title="Projects" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </NavStyle>

  )
}

export default NavBar