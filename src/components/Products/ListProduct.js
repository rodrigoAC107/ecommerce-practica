import React, { useEffect, useState } from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productService";
import { Product } from "./Product";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(resp => setProducts(resp));
  }, [])

  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {products.length < 0 ? (
        <div>Cargando...</div>
      ) : (
        products.map((item, index) => (
          <CardGroup key={index}>
            <Col>
              <Product
                id={item.id}
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
