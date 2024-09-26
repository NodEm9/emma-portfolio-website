import React from 'react'
import './about-view.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import myprofilepic from '../../assets/images/hero.jpg'
import HomeTwonView from './home-town-view'

function AboutView() {
  return (
    <Row className='justify-content-center text-center mt-5 pt-5'>
      <Row className='justify-content-center'>
        <Col md={8} className='profile-pic mt-5 mb-'>
          <img src={myprofilepic} alt='Emmanuel Nodolomwanyi' className='hero-img text-center rounded-circle' />
          <h1 className='mt-5'>About Me</h1>
        </Col>
      </Row>
      <Row md={12} className='justify-content-center'>
        <Col md={5} sm={12} className='intro-txt mt-5 mb-5 text-wrap'>
        After a career in document digitization, where I honed my attention to detail and organizational skills, I transitioned into web development, driven by my passion for technology and building digital experiences.  I completed a Front-End Web Development course between (November 2020 - February 2021), which introduced me to web design and coding fundamentals. More recently, I graduated from a Full-Stack Web Development program (April - September 2024), where I gained hands-on experience in both front-end and back-end technologies, including HTML, CSS, JavaScript, and frameworks like React,  Angular, Node.js, Serverless and Express and Relational and Non-Relational databases like MongoDB and SQL.

       <br />
       <br />
       With a unique background that combines technical adaptability from my digitization work and comprehensive coding knowledge, I’m excited to bring my skills to a new career in web development, contributing to dynamic and impactful projects.
        </Col>
      </Row>
      <Row md={8} className='mx-auto justify-content-center'>
        <Col md={5} className='mr-5 pr-5'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Skills</th>
                <th>Years of Experience</th>
                <th>Level of Expertise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>HTML</td>
                <td>5</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>2</td>
                <td>CSS</td>
                <td>4</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>3</td>
                <td>JavaScript</td>
                <td>4</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Python</td>
                <td>1</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>5</td>
                <td>React</td>
                <td>4</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Angular</td>
                <td>3</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Node.js</td>
                <td>4</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Express</td>
                <td>4</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>9</td>
                <td>AWS & Serverless framework</td>
                <td>3</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>10</td>
                <td>MongoDB/SQL</td>
                <td>4/3</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Jira/Ora</td>
                <td>3</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row md={12} sm={8} className='mt-5 mb-5 justify-content-center'>
        <Col md={8}>
          <h2 className='mb-4 mt-2'>Home Town</h2>
          <HomeTwonView />
        </Col>
      </Row>
    </Row>
  )
}

export default AboutView