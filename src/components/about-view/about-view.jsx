import React from 'react'
import './about-view.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import certifications from '../../assets/images/certificate-1356.svg'
import engineerTeam from '../../assets/images/engineer-team.svg'
import CustomImage from '../customs/CustomImage'


function AboutView() {
  return (
    <Row lg={12} md={10} className='justify-content-center text-center mt-5 mb-5'>
      <Row className='justify-content-center mt-5 mb-4'>
        <Col md={12} className='mt-5'>
          <h1 className='fw-bold'>About Me</h1>
        </Col>
      </Row>
      <Row lg={5} md={8} className='justify-content-center'>
        <Col lg={5} md={10} sm={3} className='about-txt'>
          <div className='icons text-center'>
            <CustomImage src={certifications} alt='Certificate Icon' />
            <h2 className='fs-4 fw-bold mt-3 mb-3'>Certified Web Developer</h2>
          </div>
          <blockquote>I completed a six month full-stack web development course with the guidance of a personal tutor and a mentor. Amongst others I built full-stack projects using  serverless framework, AWS, Google Calendar Api with TDD, BDD approach, MERN stack  and a React Native App.</blockquote>
        </Col>
        <Col lg={5} md={10} sm={3} className='about-txt'>
          <div className='icons1 text-center'>
            <CustomImage src={engineerTeam} alt='Certificate Icon' />
            <h2 className='fs-4 fw-bold mt-3 mb-3'>Team Player</h2>
          </div>
          <blockquote>My experience in the digitization, banking and telecommunications sectors has shaped me into a proactive team player, skilled at collaborating with diverse teams to solve complex challenges. I leverage the communication and problem-solving skills honed in these industries to contribute effectively in tech environments, driving projects forward with a customer-focused approach.</blockquote>
        </Col>        <Col lg={5} md={10} sm={3} className='about-txt mb-5'>
          <div className='icons text-center'>
            <CustomImage src={certifications} alt='Certificate Icon' />
            <h2 className='fs-4 fw-bold mt-3 mb-3'>Certified Web Developer</h2>
          </div>
          <blockquote>I completed a six month full-stack web development course with the guidance of a personal tutor and a mentor. Amongst others I built full-stack projects using  serverless framework, AWS, Google Calendar Api with TDD, BDD approach, MERN stack  and a React Native App.</blockquote>
        </Col>
        <Col lg={5} md={10} sm={3} className='about-txt mb-5'>
          <div className='icons1 text-center'>
            <CustomImage src={engineerTeam} alt='Certificate Icon' />
            <h2 className='fs-4 fw-bold mt-3 mb-3'>Certified Web Developer</h2>
          </div>
          <blockquote>I completed a six month full-stack web development course with the guidance of a personal tutor and a mentor. Amongst others I built full-stack projects using  serverless framework, AWS, Google Calendar Api with TDD, BDD approach, MERN stack  and a React Native App.</blockquote>
        </Col>
      </Row>
      {/* <Row md={8} className='mx-auto justify-content-center mb-4'>
        <Col md={5} className='mr-5 pr-5 skills'>
          <h2 className='mb-4 mt-2 fs-3 fw-bold'>Technical Skills</h2>
          <FaUserGroup className='fs-5' /> <FaAward className='fs-5' />
          <div className='Skills-items'>
            <p><strong>&bull; Language and Tools:</strong> <span>HTML, CSS, JavaScript</span></p>
            <p><strong>&bull; Frameworks and Libraries:</strong> <span>React, Angular, Next.js, Serverless</span></p>
            <p><strong>&bull; Database:</strong> <span>MongoDB, SQL</span></p>
            <p><strong>&bull; Cloud:</strong> <span>AWS</span></p>
          </div>
        </Col>
      </Row> */}

      {/* <Row md={12} sm={8} className='mt-5 mb-5 justify-content-center'>
        <Col md={8}>
          <h2 className='mb-4 mt-2'>Home Town</h2>
          <HomeTwonView />
        </Col>
      </Row> */}
    </Row>
  )
}

export default AboutView