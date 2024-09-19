import React from 'react'
import './footer-view.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'

function FooterView() {
  return (
    <footer className='p-5'>
      <Container className='text-center d-flex flex-column gap-3 justify-contnet-center'>
        <Row className='text-center'>
          <Col md={12}>
            <h1 className='text-white'>Find Me</h1>
          </Col>
          <Col md={12} className='flex-row gap-3 justify-contnet-center'>
            <a href="https://facebook.com" className='text-white m-2 fs-3 justify-contnet-center' rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/NodEm9" target="_blank" className='m-2 text-white fs-3 justify-contnet-center' rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nodolomwanyi" target="_blank"
              className='m-2 fs-3 text-white '
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterView