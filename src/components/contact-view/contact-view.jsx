import React from 'react'
import './contact-view.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaMobile } from 'react-icons/fa6'

function ContactView() {
  return (
    <Container className='contact-container justify-content-center mb-5'>
      <Row className='contact text-white m-4 justify-content-center'>
        <Col md={8} className='text-white text-center mt-5 mr-5'>
          <h1>Contact Us</h1>
        </Col>
        <Col md={8} className='d-flex flex-column fs-5 m-5 pl-sm-5 pr-5 pl-5'>
          <p className='fs-4'>For any questions, please reach out via the contacts below.</p>
          <p className='home'>&#127968; <span>Gelsenkirchen</span></p>
          <p className='email'>
            &#128231;
            <a href="mailto:emma_nodolo1@yahoo.com"
              rel="noopener noreferrer"
              className='text-white'
            > emma_nodolo1(at)yahoo.com</a>
          </p>
          <p className='phone'>
            <FaMobile />
            <a href="tel:+4915901291098"
              rel="noopener noreferrer"
              className='text-white'
            > +49 15901291098</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactView