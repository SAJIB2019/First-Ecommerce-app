import React from "react";
import styled from "styled-components";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Image15 from "../images/payment.png";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
`;

const Left = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
`;

const Logo = styled.h1`
  text-transform: uppercase;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    margin: 12px 0;
    text-align: justify;
  }
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

const Center = styled.div`
  flex: 1;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;
`;

const Right = styled.div`
  flex: 1;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const PaymentImage = styled.img`
  width: 60%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Florina.</Logo>
        <Desc>
          There are many variations of passage of lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humor, or
          randomized words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneAndroid style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          contact@lama.dev
        </ContactItem>
        <PaymentImage src={Image15} />
      </Right>
    </Container>
  );
};

export default Footer;
