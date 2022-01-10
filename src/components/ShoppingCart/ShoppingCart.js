import React, { useEffect, useState } from "react";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLiveQuery } from "dexie-react-hooks";
import { ShoppingCartItem } from "./ShoppingCartItem";
import db from "../../app/db/db";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price;
    }, 0);
    setTotalPrice(total.toFixed(2));
  };

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  }, []);

  useEffect(() => {
    if (productsCart.length > 0) {
      getTotalPrice();
    }
  }, [productsCart]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-4"
    >
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Ecommerce</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Carrito" id="collasible-nav-dropdown">
              {productsCart?.map((product) => {
                return <ShoppingCartItem key={product.id} item={product} />;
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to={"/purchase"}>Total: $ {totalPrice}</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
