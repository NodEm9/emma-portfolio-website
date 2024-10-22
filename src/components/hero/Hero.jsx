import myprofilepic from '../../assets/images/hero.avif'
import myprofilepic1 from '../../assets/images/hero-avf-img.avif'
import heropicture from '../../assets/images/hero.webp'
import heropicture1 from '../../assets/images/hero-img.webp'
import profilepic from '../../assets/images/hero.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Spring, animated } from '@react-spring/web'
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from 'react-icons/fa6'
import Button from '../customs/Button'
import { useState } from 'react'
import scrollToView from '../../lib/scrollToView'

const Hero = () => {
  const [isSection, setIsection] = useState(false)

  return (
    <Row md={12} className='main'>
      <Col md={6} className='hero-image'>
        <picture>
          <source srcSet={`${myprofilepic}, ${myprofilepic1}`} width={`${500}, ${800}`} type='image/avif' className='img-fluid' />
          <source srcSet={`${heropicture}, ${heropicture1}`} width={`${500}, ${800}`} type='image/webp' className='img-fluid' />
          <img src={profilepic} alt='My profile' className='hero-picture img-fluid' />
        </picture>
      </Col>
      <Col md={6} className='intro-text justify-content-center'>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 500, }}>
          {props => <animated.h1 style={props} className='hero-text fw-bold'>
            Hello, I&apos;m  <span className='text-primary fw-bold ml-5'> Emmanuel</span>
          </animated.h1>}
        </Spring>
        <Spring from={{ x: 0 }} to={{ x: 10 }} config={{ duration: 500 }}>
          {props => <animated.p style={props} className='content'>
            With a diverse background in digitization, marketing, and banking, I bring a unique blend of skills to web development. My journey from roles in document digitization, telecommunications marketing, and banking sparked a passion for coding, leading me to complete front-end and full-stack development programs at Udacity and CareerFoundry. Equipped with expertise in JavaScript, HTML, CSS, React, Angular, Next.js, Node.js, MongoDB, and SQL, I'm eager to use my skills to create impactful web solutions <br />
            <Button title='Learn More'
              className='hero-btn border-none p-2 w-25 mt-3'
              onClick={
                () => scrollToView(setIsection).scrollToSection2(isSection)
              }>
              Learn More
            </Button>
          </animated.p>}
        </Spring>
        <Spring from={{ x: 0 }} to={{ x: 10 }} config={{ duration: 500 }}>
          {props => <animated.p style={props} className='text-center gap-5'>
            <small className='social-link d-flex gap-3 fs-4'>
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
          </animated.p>
          }
        </Spring>
      </Col>
    </Row>
  )
}

export default Hero