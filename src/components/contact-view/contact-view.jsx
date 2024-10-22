import './contact-view.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaEnvelope } from 'react-icons/fa6'

function ContactView() {
  return (
    <div className='contact justify-content-center mb-5'>
      <Row md={12} className='justify-content-center'>
        <Col md={12} className='text-center fw-1 mt-5 mr-5'>
          <h1>Contacts</h1>
        </Col>
        <Col md={8} sm={12} className='text-white fs-5 m-5'>
          <p className='home'>&#127968; <span>Gelsenkirchen</span></p>
          <a
            href="mailto:emma.nodolomwanyi@gmail.com"
            rel="noopener noreferrer"
            aria-label='Email Address'
            className='email text-white text-decoration-none'
          > <span className='text-dark fw-1'><FaEnvelope /></span>emma.nodolomwanyi@gmail.com</a>
          
        </Col>
      </Row>
    </div>
  )
}

export default ContactView