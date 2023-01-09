import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row>
            <Col classname='text-centre py-3'>
              Copyright &copy; Three Amigos
            </Col>
          </Row>
    </Container>
    </footer>
  )
}

export default Footer
