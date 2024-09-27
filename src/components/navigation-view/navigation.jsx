import React from 'react'
import './navigation.css'
import logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navLinks = [
  { title: 'Work', href: '#/work'},
  { title: 'About', href: '#/about'},
  { title: 'Contact', href: '#/contact'},
  { title: 'Blog', href: '#/blog'},
]

function Navigation() {
  // Get the current URL path and set it to the pathName variable
  const pathName = new URL(window.location.href).hash

  return (
    <Navbar className='bg-dark fixed-top'>
      <Container>
        <Navbar.Brand href="#/" className='d-flex gap-3 align-items-center jusfiy-content-center'>
          <img src={logo} alt="Website Logo" className='web-logo rounded-circle text-white fw-bold' />
          <h1 defer className='owner-name text-white fw-bold '>Emma Nodo</h1>
        </Navbar.Brand>
        <Navbar.Toggle className='toggle bg-light' />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='nav text-white'>
            <Navbar.Text role='menu' className='nav-items'>
              {navLinks.map((link, index) => (
                 <Nav.Link
                 key={index}
                 href={link.href}
                 role='menuitem'
                 aria-label='Navigation Link'
                 contextMenu='Navigation Link'
                  className='nav-link text-white'>
                  {/** Add active class to the current link */}
                  {pathName === link.href ? <strong className='text-primary'>{link.title}</strong> : link.title}
                </Nav.Link>
              ))}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation