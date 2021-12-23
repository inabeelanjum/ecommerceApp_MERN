import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  color: gray;
`;

const Categoryitems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title> {item.title} </Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default Categoryitems;
