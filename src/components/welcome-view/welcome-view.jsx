import React from 'react'
import './welcome-view.css'
import myprofilepic from '../../assets/images/hero.avif'
import myprofilepic1 from '../../assets/images/hero-avf-img.avif'
import heropicture from '../../assets/images/hero.webp'
import heropicture1 from '../../assets/images/hero-img.webp'
import profilepic from '../../assets/images/hero.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cardData from '../../data/cardData'
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium, FaArrowRight } from 'react-icons/fa6'
import { Spring, animated } from '@react-spring/web'
import Card from 'react-bootstrap/Card'


function WelcomePage() {
  // Retrieve the first four projects from the cardData array
  const recentProject = cardData.slice(0, 4)
  return (
    <Container fluid="md">
      <Row md={12} className='main'>
        <Col md={6} className='hero-image'>
          <picture>
            <source srcSet={`${myprofilepic}, ${myprofilepic1}`} width={`${500}, ${800}`} type='image/avif' className='img-fluid' />
            <source srcSet={`${heropicture}, ${heropicture1}`} width={`${500}, ${800}`} type='image/webp' className='img-fluid' />
            <img src={profilepic} alt='My profile' className='hero-picture img-fluid' />
          </picture>
        </Col>
        <Col md={6} className='intro-text justify-content-center'>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000, }}>
            {props => <animated.h1 style={props} className='hero-text fw-bold'>
              Motivated about turning ideas into a <span className='text-primary fw-bold'>creative</span> and <span className='text-primary fw-bold'>innovative</span> experience.
            </animated.h1>}
          </Spring>
          <p className='content'>
            <span className='owner-name'>I'm </span><b> Emmanuel Nodolomwanyi</b>,
            a enthusaistic full-stack developer with a knack for building dynamic, user-friendly web applications. I enjoy creating seamless experiences from front-end design to back-end functionality, using technologies like JavaScript, React, Angular, Node.js, AWS, MongoDB. <br />
            <a href='#/about' className='text-primary'>Read more...<FaArrowRight className='text-dark' /> </a>
          </p>
          <Spring from={{ x: 0 }} to={{ x: 10 }} config={{ duration: 1000 }}>
            {props => <animated.p style={props} className=' gap-5'>
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
      <hr />
      <Row md={12} sm={3} className='mt-3 pt-2 justify-content-center'>
        <Col md={8} className='d-flex align-items-center justify-content-between'>
          <Spring from={{ x: 0 }} to={{ x: 100 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.h2 style={props} className='h2-text fw-semi-bold fs-4'>Recent Project</animated.h2>}
          </Spring>
          <Spring from={{ x: 0 }} to={{ x: -100 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.a style={props} href="#/work" className='view-project'><h2 className='fs-4'>View ALL</h2></animated.a>}
          </Spring>
        </Col>
      </Row>
      <hr />
      <Row md={12} className='justify-content-center mt-5 mb-5 ml-5 pl-5'>
        <Col className='card-wrapper d-flex flex-wrap justify-content-center'>
          {recentProject.map((project, index) => (
            <Card key={index} className='card mb-4 subgrid'>
              {project.video ? (
                <img src={project.video} alt='Project video' className='video' />
              ) : (
                <img src={project.img} alt='Project' className='card-img' />
              )}
              <Card.Body className='card-body'>
                <Card.Title className='fw-bold pt-4 pb-1'>{project.title}</Card.Title>
                <Card.Text className='fw-medium'>{project.text}</Card.Text>
                <div className='card-link'>
                  <Card.Link href={project.appLink} target='_blank' rel="noreferrer" className='float-start'>View App</Card.Link>
                  <Card.Link href={project.codeLink} className='float-end' rel="noreferrer" target='_blank'>View Code</Card.Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <hr />
    </Container>
  )
}

export default WelcomePage