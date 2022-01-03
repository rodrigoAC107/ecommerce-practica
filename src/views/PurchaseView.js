import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { DetailCart } from '../components/ShoppingCart/DetailCart';

export const PurchaseView = ({history}) => {

    const handleCancelButton = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>
                Carrito de compras
            </h1>
            <DetailCart />
            <Row>
                <Col className='d-flex justify-content-end'>
                    <Button className='mx-2' variant='danger' onClick={handleCancelButton}>Cancelar</Button>
                    <Button className='mx-2'>Confirmar</Button>
                </Col>
            </Row>
        </div>
    );
}