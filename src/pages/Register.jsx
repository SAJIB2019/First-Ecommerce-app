import React from "react";

import styled from "styled-components";
import Image17 from "../images/registerpic.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Image17}), center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 4px;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  @media screen and (max-width: 600px) {
    padding: 8px 0;
  }
`;

const Agreement = styled.span`
  font-size: 16px;
  margin: 20px 0px;
  @media screen and (max-width: 600px) {
    text-align: justify;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid teal;

  &:hover {
    background: transparent;
    color: #034146;
  }
  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
