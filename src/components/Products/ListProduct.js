import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import { Product } from "./Product";
import json from "../../examples/products.json";

export const ListProduct = () => {
  const products = json.products;
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {products.length < 0 ? (
        <div>... Cargando</div>
      ) : (
        products.map((item, index) => (
          <CardGroup>
            <Col>
              <Product
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
              />
            </Col>
          </CardGroup>
        ))
      )}
    </Row>
  );
};
