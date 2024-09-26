import React from 'react'
import './img.css'
import heroImage from '../../assets/images/hero.avif'
import { Col } from 'react-bootstrap'

function ImageComponent({ src, alt, width, height, fetchpriority }) {
  src = heroImage
  alt = 'Emma Nodo'
  width = '100px'
  height = '100px'
  fetchpriority = 'high'
  return (
    <Col lg={1} md={1} sm={2} xs={2} className='d-flex justify-content-start'>
      <img src={src} rel='preload' fetchpriority={fetchpriority} alt={alt} width={width} height={height} className='img img-fluid rounded-circle' />
    </Col>
  )
}

export default ImageComponent