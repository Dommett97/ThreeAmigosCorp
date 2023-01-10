import React, {useEffect} from 'react'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const productID = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty))
        }
    }, [dispatch, productID, qty])

    return<div>Cart</div>
}

export default CartScreen