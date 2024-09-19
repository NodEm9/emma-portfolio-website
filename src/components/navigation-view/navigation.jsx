import React from 'react'
import './navigation.css'
import logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
  return (
    <Navbar className='bg p-1 align-items-center fixed-top'>
      <Container className='s-mr-5 e-ml-5'>
        <Navbar.Brand href="/">
          <img src={logo} alt="Website Logo" className='web-logo nded-5' />
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
        <Nav className='fs-5 gap-5 text-white'>
            <Navbar.Text>
            <Nav.Link href="/work" className='text-white'>Work</Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Link href="/about" className='text-white'>About</Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Link href="/contact" className='text-white'>Contact</Nav.Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
                                                                                                                                                                                                                                                
}


export default Navigation