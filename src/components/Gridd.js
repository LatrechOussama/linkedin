import { Container } from '@mui/material'
import React from 'react'
import { Col, Row } from 'rsuite'
import Cardd from './Cardd'

const Gridd = () => {
    return (
        <div>
         <Container>
  <Row>
    <Col style={{marginTop:'200px'}}><Cardd/></Col>
    <Col xs={6}></Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={5}></Col>
    <Col></Col>
  </Row>
</Container>   
        </div>
    )
}

export default Gridd
