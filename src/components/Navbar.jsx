import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    justify-content: space-around;
    padding: 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Input = styled.input`
  border: none;
  @media screen and (max-width: 768px) {
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  color: red;
  text-transform: uppercase;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media screen and (max-width: 768px) {
    margin: 4px;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Florina.</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/sign-in">
            <MenuItem>SIGN IN</MenuItem>
          </Link>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
