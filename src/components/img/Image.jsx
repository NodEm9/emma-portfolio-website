import React from 'react'
import './img.css'
import heroImage from '../../assets/images/hero.jpg'
import { Col } from 'react-bootstrap'

function ImageComponent({ src, alt, width, height }) {
  src = heroImage
  alt = 'Emma Nodo'
  width = '100px'
  height = '100px'
  return (
    <Col md={1} sm={12} xs={12} className='d-flex justify-content-start'>
      <img src={src} alt={alt} width={width} height={height} className='img img-fluid rounded-circle' />
    </Col>
  )
}

export default ImageComponent