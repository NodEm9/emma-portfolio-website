import React from 'react'
import './work-view.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  cardData from '../../data/cardData'


function WorkView() { 
  return (
    <Container fluid className='mb-5 mt-5 pt-1 ml-5 pl-5'>
      <h1 className='text-center pt-3 mt-5 pb-4 mb-4'>My Work</h1>
      <Row md={12} className='mt-5 mb-5 ml-5 pl-5' >
        <Col md={12} className='card-container d-flex gap-5 flex-wrap justify-content-center ml-5 pl-5'>
          {cardData.map((card, index) => (
            <Card key={index} className='mb-4 subgrid'>
              {card.video ? (
                <Card.Img  rel='preload' variant='top' src={card.video} className='video' />
              ) : (
                <Card.Img rel='preload' variant='top' src={card.img} className='card-img' />
              )}
              <Card.Body className='card-body'>
                <Card.Title className='fw-bold pt-1 pb-1'>{card.title}</Card.Title>
                <Card.Text className='fw-medium'>
                  {card.text}
                </Card.Text>
                <div className='card-link'>
                <Card.Link href={card.appLink} target='_blank' className='float-start'>View App</Card.Link>
                <Card.Link href={card.codeLink} className='float-end' target='_blank'>View Code</Card.Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default WorkView