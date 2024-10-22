import './welcome-view.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Spring, animated } from '@react-spring/web'
import Hero from '../hero/Hero'
import WorkView from '../work-view/work-view'
import AboutView from '../about-view/about-view'
import ContactView from '../contact-view/contact-view'
import { FaArrowUp } from 'react-icons/fa6'
import Button from '../customs/Button'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function WelcomePage() {
  const backToTop = () => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  }
  return (
    <div fluid="md">
      <Hero />
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
      <hr />
      <section className='section2' data-about >
        <AboutView />
      </section>
      <section className='section3' data-work >
        <WorkView />
      </section>
      <section className='section4' data-contact >
        <ContactView />
        <div className='pr-5 backT d-flex justify-content-end align-items-end'>
          <Button title='Back to Top' className='back-to-top bg-dark text-white ' onClick={backToTop}>
            <FaArrowUp />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default WelcomePage