import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  ${mobile({ width: "57vh" })};
`;

const Special = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: yellow;
  margin-left: 5px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Annoncement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Order <Special> 50 DT</Special>!
    </Container>
  );
};

export default Annoncement;
