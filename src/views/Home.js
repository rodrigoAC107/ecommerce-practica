import React from 'react';
import { Container } from "react-bootstrap";
import { ListProduct } from '../components/Products/ListProduct';

export const Home = () => {
    return (
        <Container fluid>
        <div className="App">
          <ListProduct />
        </div>
      </Container>
    ) 
}