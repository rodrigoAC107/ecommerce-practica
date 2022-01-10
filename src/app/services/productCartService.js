import db from "../db/db";

export const getProductById = async (id) => {
  const productById = await db.cart.get(Number(id));
  return productById;
};

export const getAllProducts = async () => {
  const product = await db.cart.toArray();
  return product;
};
