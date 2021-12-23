import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
`;
const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Updates instantly</Description>
      <InputContainer>
        <Input placeholder="Enter email .." />
        <Button>
          <Send></Send>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
