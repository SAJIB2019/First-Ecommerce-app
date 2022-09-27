import React from "react";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";

import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media screen and (max-width: 600px) {
    margin-left: 2px;
  }
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  a:text-decoration: none;
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
          <Logo>SRS.</Logo>
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
