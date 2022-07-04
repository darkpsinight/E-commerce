import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoncement from "../components/Annoncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  border: solid 1px;
`;
const Option = styled.option`
  font-weight: 600;
  font-size: 15px;
`;

const ProductList = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Annoncement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color:
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size:
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option disabled selected>
                Sort by:
              </Option>
              <Option>Newest</Option>
              <Option>Price (Asc)</Option>
              <Option>Price (Desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductList;
