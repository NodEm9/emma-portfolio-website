import React from 'react'
import './about-view.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import myprofilepic from '../../assets/images/myprofilepic.webp'
import HomeTwonView from './home-town-view'

function AboutView() {
  return (
    <Row className='ustify-content-center text-center mt-5'>
      <Row className='justify-content-center'>
        <Col md={8} className='profile-pic mt-5 mb-'>
          <img src={myprofilepic} alt='Emmanuel Nodolomwanyi' className='hero-img text-center rounded-circle' />
          <h1 className='mt-5 text-white'>About Me</h1>
        </Col>
      </Row>
      <Row md={12} className='justify-content-center'>
        <Col md={5} className='intro-txt mt-5 mb-5 text-wrap text-white'>
          Hi, I'm Emmanuel Nodolomwanyi, a passionate junior full-stack developer with a knack for building dynamic, user-friendly web applications. I enjoy creating seamless experiences from front-end design to back-end functionality, using technologies like JavaScript, React, Angular, Node.js, AWS and MongoDB.
       <br />
       <br />
          This portfolio showcases my journey as a developer, highlighting the projects I’ve worked on, the skills I’ve honed, the problems I’ve solved and I’m always eager to improve my skills. Whether you're here to explore my work or connect for potential opportunities, I’m excited to share what I’ve been building. Thanks for stopping by.
        </Col>
      </Row>
      <Row md={8} className='justify-content-center'>
        <Col md={5} className='tabel-one justify-content-center'>
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
                <td>5</td>
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
                <td>2</td>
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
                <td>4</td>
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
                <td>4</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>10</td>
                <td>MongoDB/SQL</td>
                <td>4</td>
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
        <Col md={8} className=''>
          <h2 className='text-white mb-4 mt-2'>Home Town</h2>
          <HomeTwonView />
        </Col>
      </Row>
    </Row>
  )
}

export default AboutView