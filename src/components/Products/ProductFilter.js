import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getAllCategories } from "../../app/services/productService";

export const ProductFilter = ({ history }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setFilters(data));
  }, []);

  const handleClickFilter = (filter) => {
    history.push(`/products/${filter}`);
  };

  return (
    <Dropdown className="mb-4">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {filters.length > 0 &&
          filters.map((filter, index) => (
            <Dropdown.Item
              onClick={() => handleClickFilter(filter)}
              key={index}
            >
              {filter}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
