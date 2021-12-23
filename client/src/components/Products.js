import React from "react";
import styled from "styled-components";
import Product from "./Product.js";
import { popularProducts } from "../data.js";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
