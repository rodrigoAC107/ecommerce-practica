import React from "react";
import { Container } from "react-bootstrap";
import { FilterListProduct } from "../components/Products/FilterListProducts";
import { ProductFilter } from "../components/Products/ProductFilter";

export const ProductsView = ({ history, match }) => {
  const { category } = match.params;

  return (
    <Container fluid>
      <div className="App">
        <ProductFilter history={history} />
        <FilterListProduct category={category} />
      </div>
    </Container>
  );
};
