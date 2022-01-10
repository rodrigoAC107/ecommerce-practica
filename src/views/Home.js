import React from 'react';
import { Container } from "react-bootstrap";
import { ListProduct } from '../components/Products/ListProduct';
import { ProductFilter } from '../components/Products/ProductFilter';

export const Home = ({history}) => {
    return (
        <Container fluid>
        <div className="App">
          <ProductFilter history={history} />
          <ListProduct />
        </div>
      </Container>
    ) 
}