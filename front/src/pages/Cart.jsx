import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Annoncement from "../components/Annoncement";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled " && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column", width: "57vh" })};
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  paddding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 50px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "30px" })};
`;
const DividerHorizontal = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
        history.push("/success", { stripeData: res.data, products: cart });
      } catch (err) {
        console.log(err.response.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history, cart.total, cart]);

  return (
    <Container>
      <Navbar />
      <Annoncement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Toptext>Shopping bag (2)</Toptext>
            <Toptext>YOUR WHISHLIST (0)</Toptext>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product.product._id}>
                <ProductDetail>
                  <Image src={product.product.img} />
                  <Details>
                    <ProductName>
                      <b>PRODUCT: </b>
                      {product.product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product.product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>SIZE: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add style={{ cursor: "pointer" }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ cursor: "pointer" }} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.product.price * product.quantity} DT
                    <DividerHorizontal />
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <DividerHorizontal />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} DT</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>7 DT</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-7 DT</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} DT</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ShopTn"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHNj9PK7N9WLGXRF5FDbA7XdtjH6caLiwnBW2__PWC3crRyS_XiocBVKnP9GONqvVp9A"
              description={`Your total is ${cart.total} DT`}
              billingAddress
              shippingAddress
              amount={cart.total * 100}
              currency="TTD"
              token={onToken}
              stripeKey={KEY}
            >
              <Button
                style={{
                  border: "none",
                  width: 120,
                  borderRadius: 5,
                  padding: "20px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                CHECKOUT NOW
              </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
