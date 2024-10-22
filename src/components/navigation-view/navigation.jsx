import './navigation.css'
import logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import scrollToView from '../../lib/scrollToView.js';
import { useState } from 'react';
import Button from '../customs/Button.jsx';


function Navigation() {
  const [isSection, setIsSection] = useState(false);
  // Navigation links buttons
  const navLinks =
    [
      {
        label: 'About',
        section: () => scrollToView(setIsSection).section2(isSection)
      },
      {
        label: 'Work',
        section: () => scrollToView(setIsSection).section3(isSection)
      },
      {
        label: 'Contact',
        section: () => scrollToView(setIsSection).section4(isSection)
      }
    ];

  return (
    <Navbar className='bg-dark fixed-top'>
      <Container fluid className='nav-container'>
        <Navbar.Brand href="#/" className='d-flex ml-5 gap-3 align-items-center jusfiy-content-center'>
          <img src={logo} alt="Website Logo" className='web-logo rounded-circle text-white fw-bold' />
          <h1 defer className='owner-name text-primary fw-bold '>Emma Nodo</h1>
        </Navbar.Brand>
        <Navbar.Toggle className='toggle bg-light' />
        <Navbar.Collapse className="justify-content-end mr-5">
          <Nav className='nav text-white'>
            <Navbar.Text role='menu' className='nav-items'>
              {navLinks.map((link, index) => (
                <div key={index} className='navlink'>
                  <Button title={link.label} className={isSection ? 'active' : 'text-white bg-transparent border-none nav-link'}
                    onClick={() => link.section()}>
                    {link.label}
                  </Button>
                </div>
              ))}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation


