import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Annoncement from "../components/Annoncement";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  text-align: justify;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Annoncement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632473750-screen-shot-2021-09-24-at-09-53-42-1632473699.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Autumn Dress</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              impedit repellendus tempore cumque delectus illum labore. Soluta,
              repellat. Ipsa eligendi ipsam est perferendis voluptas sint, sed
              id dignissimos corrupti assumenda?
            </Desc>
            <Price>60 DT</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Colors</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove style={{ cursor: "pointer" }} />
                <Amount>1</Amount>
                <Add style={{ cursor: "pointer" }} />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Product;
