import './contact-view.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium, FaMobile } from 'react-icons/fa6'

function ContactView() {
  return (
    <Container className='contact-container justify-content-center mb-5'>
      <Row className='contact m-4 justify-content-center'>
        <Col md={8} className='text-center mt-5 mr-5'>
          <h1>Contacts</h1>
        </Col>
        <Col md={8} className='d-flex flex-column fs-4 m-5 pl-sm-5 pr-5 pl-5'>
          <p className='home'>&#127968; <span>Gelsenkirchen</span></p>
          <a href="mailto:emma_nodolo1@yahoo.com" rel="noopener noreferrer" aria-label='Email Address'
            className='email text-decoration-none'
          > <span> &#128231;</span> emma_nodolo1(at)yahoo.com</a>
          <p className='phone'>
            <FaMobile />
            <a href="tel:+4915901291098" aria-label='Phone Number' rel="noopener noreferrer"> +49 15901291098</a>
          </p>
          <small className='d-flex gap-3 fs-4'>
            <a href="https://x.com/nodo_emma" aria-label='My X handle' target='_blank' className='fs-4' rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com/NodEm9" aria-label='My Github account link' target="_blank" className='fs-4 text-dark' rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nodolomwanyi" aria-label='My Linkedin handle' target="_blank"
              className='fs-4 text-primary'
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@padave805" aria-label='My Medium handle' target="_blank"
              className='fs-3 text-dark'
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactView