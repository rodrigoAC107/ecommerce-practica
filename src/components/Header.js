import React from "react";
import { Row} from "react-bootstrap";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const Header = () => {
    return (
        <Row>
            <ShoppingCart></ShoppingCart>
        </Row>
    )
};
