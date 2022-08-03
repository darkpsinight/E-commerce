import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: cneter;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px", marginRight: "10px" })};
`;

const Input = styled.input`
  padding-left: 10px;
  border: none;
  &:focus {
    outline-width: 0;
  }
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  &:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(-2px);
    box-shadow: 5px 6px 11px 1px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 5px 6px 11px 1px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 5px 6px 11px 1px rgba(0, 0, 0, 0.16);
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const history = useHistory();

  const handleClickRegister = () => {
    history.push("/register");
  };
  const handleClickLogin = () => {
    history.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ShopTn</Logo>
        </Center>
        <Right>
          <MenuItem
            style={{ border: "2px solid teal", padding: "6px" }}
            onClick={handleClickRegister}
          >
            Register
          </MenuItem>
          <MenuItem
            style={{ border: "2px solid teal", padding: "6px" }}
            onClick={handleClickLogin}
          >
            SIGN IN
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge
                overlap="rectangular"
                badgeContent={quantity}
                color="primary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
