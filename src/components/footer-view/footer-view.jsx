import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaXTwitter, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'

function FooterView() {
  return (
    <footer className='p-5 overflow-hidden'>
      <Container className='text-center d-flex flex-column gap-3 justify-contnet-center'>
        <Row className='text-center text-white'>
          <Col md={12}>
            <h1>Find Me</h1>
          </Col>
          <Col md={12} className='flex-row gap-3 justify-contnet-center'>
            <a href="https://x.com/nodo_emma" aria-label='My X handle' target='_blank' className='text-dark fs-4 fw-1' rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com/NodEm9" aria-label='My Github link' target="_blank" className='text-dark fw-1 m-2 fs-3 justify-contnet-center' rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nodolomwanyi" aria-label='My Linkedin handle' target="_blank"
              className='m-2 fw-1 fs-3 text-primary'
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@padave805" aria-label='My Medium handle' target="_blank"
              className='fs-3 fw-1 text-dark'
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterView