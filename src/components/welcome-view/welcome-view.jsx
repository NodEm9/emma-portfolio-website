import React from 'react'
import './welcome-view.css'
import myprofilepic from '../../assets/images/hero.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cardData from '../../data/cardData'
import {  FaGithub, FaLinkedin, FaXTwitter, FaMedium, FaArrowRight } from 'react-icons/fa6'
import { Spring, animated } from '@react-spring/web'


function WelcomePage() {
  // Retrieve the first four projects from the cardData array
  const recentProject = cardData.slice(0, 4)
  return (
    <Container fluid="md">
      <Row md={12} className='main'>
        <Col md={6} className='hero-image'>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.img style={props} src={myprofilepic} alt='Emmanuel' className='img-fluid' />}
          </Spring>
        </Col>
        <Col md={6} className='intro-text justify-content-center'>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000, }}>
            {props => <animated.h1 style={props} className='hero-text fw-bold'>
              I'm poised to create <span className='text-primary'>innovative</span> solutions for your business.
            </animated.h1>}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.p style={props} className='content fs-5'>
              <span className='owner-name'>I'm </span><b>Emmanuel Nodolomwanyi</b>,
              a enthusaistic full-stack developer with a knack for building dynamic, user-friendly web applications. I enjoy creating seamless experiences from front-end design to back-end functionality, using technologies like JavaScript, React, Angular, Node.js, AWS and MongoDB.  
              <a href='#/work' className='text-primary'>Read more...<FaArrowRight className='text-dark'/> </a>
            </animated.p>}
          </Spring>
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
        <Row md={12} sm={8} className='recent-proj mt-3 pt-2 mb-5 justify-content-center'>
        <Col md={8} className='d-flex  align-items-center justify-content-between'>
        <Spring from={{ x: 0 }} to={{ x: 100 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.h2 style={props} className='h2-text fs-4'>Recent Project</animated.h2>}
          </Spring>
          <Spring from={{ x: 0 }} to={{ x: -100 }} config={{ duration: 1000, damping: 1 }}>
            {props => <animated.a style={props} href="#/work" className='view-project'><h2 className='fs-4'>View ALL</h2></animated.a>}
          </Spring>
          </Col>
          <Col md={8} className='card-containers'>
            {recentProject.map((project, index) => (
              <div key={index} className='card mb-4 subgrid'>
                {project.video ? (
                  <img src={project.video} alt='Project video' className='video' />
                ) : (
                  <img src={project.img} alt='Project' className='card-img' />
                )}
                <div className='card-body'>
                  <h3 className='fw-bold pt-1 pb-1'>{project.title}</h3>
                  <p className='fw-medium'>{project.text}</p>
                  <div className='card-link'>
                    <a href={project.appLink} target='_blank' rel="noreferrer" className='float-start'>View App</a>
                    <a href={project.codeLink} className='float-end' rel="noreferrer" target='_blank'>View Code</a>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      <hr />
    </Container>
  )
}

export default WelcomePage