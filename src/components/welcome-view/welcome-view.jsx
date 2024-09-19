import React from 'react'
import './welcome-view.css'
import myprofilepic from '../../assets/images/myprofilepic.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function WelcomePage() {
  return (
    <Container fluid="md">
      <Row md={12} className='main gap-0'>

        <Col md={6} className='profile-pic mt-5 mb-5'>
          <img src={myprofilepic} alt='Emmanuel Nodolomwanyi' className='rounded-circle' />
        </Col>
        <Col md={6} className='mt-5 text-white'>
          <h1 className='welcome-text fs-1'>Welcome to Portfolio</h1>
          <p className='fs-5'>
            <span className='owner-name'>Hi, I'm </span><b>Emmanuel Nodolomwanyi</b>,
            a passionate junior full-stack developer with a knack for building dynamic, user-friendly web applications. I enjoy creating seamless experiences from front-end design to back-end functionality, using technologies like JavaScript, React, Angular, Node.js, AWS and MongoDB.
          </p> <a href='/work' className='text-primary'>Find out more...<br /></a>
        </Col>
      </Row>
      </Container>
  )
}

export default WelcomePage

{/* <Navigation />
<Routes>
  <Route path="/" element={<WelcomePage />} />
  <Route path="/about" element={
    <>
      {about ? <Navigate to={'/'} replace/> : <About />}
    </>

  } />
  <Route path="/work" element={<Work />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer /> */}