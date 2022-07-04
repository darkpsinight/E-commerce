import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Annoncement from "../components/Annoncement";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  text-align: justify;
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
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterTitle = styled.span``;
const FilterColor = styled.div``;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;

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
            <Price>20 DT</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
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
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Product;
