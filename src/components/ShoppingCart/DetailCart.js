import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productCartService";

export const DetailCart = () => {
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getAllProducts().then((productsFromDb) => setProductsCart(productsFromDb));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsCart.length > 0 &&
          productsCart.map((product, index) => (
            <>
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            </>
          ))}
      </tbody>
    </Table>
  );
};
