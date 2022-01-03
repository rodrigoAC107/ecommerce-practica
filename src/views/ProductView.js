import React, { useEffect, useState } from "react";
import { getProductById } from "../app/services/productService";

export const ProductView = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    getProductById(id)
      .then((product) => setProductDetail(product))
      .catch((err) => console.log(err));
  }, [match]);
  return (
    <div>
      <h1>{ productDetail && JSON.stringify(productDetail) }</h1>
    </div>
  );
};
