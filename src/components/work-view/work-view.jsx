import React from 'react'
import './work-view.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  cardData from '../../data/cardData'
import Card from '../customs/Card'


const WorkView = () => { 
  return (
    <Container fluid className='mb-5 mt-5 pt-1 ml-5 pl-5'>
      <h1 className='text-center pt-3 mt-5 pb-4 mb-4'>My Work</h1>
      <Row md={12} className='mt-5 mb-5 ml-5 pl-5' >
        <Col md={12} className='card-container d-flex gap-5 flex-wrap justify-content-center ml-5 pl-5'>
          {cardData.map((card, index) => (
            <div key={index} className=' mb-4 subg'>
              <Card 
                title={card.title}
                img={card.img}
                text={card.text}
                video={card.video}
                appLink={card.demoUrl}
                codeLink={card.codeUrl}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default WorkView