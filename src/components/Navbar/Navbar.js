import React, { useEffect, useState } from "react";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLiveQuery } from "dexie-react-hooks";
import { NavBarItem } from "./NavbarItem";
import db from "../../app/db/db";

export const NavBar = () => {
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
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Carrito" id="collasible-nav-dropdown">
              {productsCart?.map((product) => {
                return <NavBarItem key={product.id} item={product} />;
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item>
              Total: $ {totalPrice}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
