import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)

  return <>
  <a href className='btn btn-dark my-3' to='/'> Go Back</a>
  </>
}

export default ProductScreen
