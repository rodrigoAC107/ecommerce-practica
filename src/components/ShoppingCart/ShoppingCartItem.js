import React from "react";

import { NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ShoppingCartItem = (item) => {
  const { title, price, id } = item.item;
  return (
    <>
      <NavDropdown.Item>
        <Link to={`/product/${id}`}>
          {title.length > 20 ? `${title.substring(0, 20)}...` : title} - ${price}
        </Link>
      </NavDropdown.Item>
    </>
  );
};
