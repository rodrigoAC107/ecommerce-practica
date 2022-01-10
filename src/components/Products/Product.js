import React from "react";
import { Card, Button } from "react-bootstrap";
import db from "../../app/db/db";
import { getProductById } from "../../app/services/productService";

export const Product = (item) => {
  const { title, description, image, price, id } = item;
  const addProductToCart = ({title, price, category}) => {
    db.cart.add({
      title: title,
      price: price,
      category: category
    })
  }

  const handleClickProductCard = (idProduct) => {
    getProductById(idProduct)
      .then((data) => console.log(data));
  }

  return (
    <Card onClick={() => handleClickProductCard(id)} className="mb-4" style={{ width: '350px', height: '400px' }}>
      <Card.Img variant="top" src={image} style={{ width: '120px', height: '120px', margin: '10px 120px'}}/>
      <Card.Body>
        <Card.Title>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Card.Title>
        <Card.Text>{description.length > 80 ? `${description.substring(0, 80)}...` : description}</Card.Text>
      </Card.Body>
      <Card.Footer text="dark" className="d-flex justify-content-around">
      <Button onClick={() => {addProductToCart(item)}} variant="warning">Agregar a Carrito</Button>
      <Button variant="primary">$ {price}</Button>
      </Card.Footer>
    </Card>
  )
};
