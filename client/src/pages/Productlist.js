import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Announcement from "../components/Announcement.js";
import Newsletter from "../components/Newsletter.js";
import Products from "../components/Products.js";
import Footer from "../components/Footer.js";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Options = styled.option``;

const Productlist = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products:</FilterText>
          <Select>
            <Options disabled selected>
              color
            </Options>
            <Options>white</Options>
            <Options>blue</Options>
            <Options>black</Options>
            <Options>red</Options>
          </Select>
          <Select>
            <Options disabled selected>
              size
            </Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products :</FilterText>
          <Select>
            <Options selected>Newest</Options>
            <Options> Price (asc)</Options>
            <Options>Price (desc) </Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Productlist;
