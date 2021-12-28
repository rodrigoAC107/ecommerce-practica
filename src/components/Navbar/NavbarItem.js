import React from "react";

import { NavDropdown } from "react-bootstrap";

export const NavBarItem = (item) => {
  const { title, price } = item.item;
  return (
    <>
      <NavDropdown.Item>{title.length > 20 ? `${title.substring(0, 20)}...` : title} - ${price}</NavDropdown.Item>
    </>
  );
};
