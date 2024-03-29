"use client";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const menuItems = [
    { label: "How it works", href: "" },
    { label: "Features", href: "" },
    { label: "Pricing", href: "" },
    { label: "Partners", href: "" },
    { label: "About us", href: "" },
  ];

  const [showBurgerbar, setShowBurgerbar] = useState(false);

  const handleShowBurgerbar = () => {
    setShowBurgerbar(!showBurgerbar);
    console.log(showBurgerbar, "showBurgerbar");
  };

  return (
    <Wrapper>
      <TitleWrapper style={{ display: showBurgerbar ? "none" : "" }}>
        <Image
          src="/icon-identity.png"
          alt="pink icon"
          width={24}
          height={27}
        ></Image>
        <Title>identityHub</Title>
      </TitleWrapper>
      <NavigationList style={{ display: showBurgerbar ? "flex" : "" }}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Alist href={item.href}>{item.label}</Alist>
          </li>
        ))}
      </NavigationList>
      <BurgerContainer onClick={handleShowBurgerbar}>
        <Image
          src="/burgerbar.svg"
          alt="burger bar"
          width={24}
          height={24}
          className=""
        ></Image>
      </BurgerContainer>
      <GetStartedContainer style={{ display: showBurgerbar ? "none" : "flex" }}>
        <Text href="">Start free trial</Text>
        <Image
          style={{ marginLeft: "8px" }}
          src="/arrow.svg"
          alt="arrow"
          width={10}
          height={8}
        ></Image>
      </GetStartedContainer>
    </Wrapper>
  );
}

const Text = styled.a`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #cad1e9;
`;

const GetStartedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(2.45deg, #21223c 7.4%, #0b0b26 98.31%);
  width: 140px;
  height: 40px;
  border-radius: 12px 12px 0 0;
  border: 1px;

  transition: background-color 0.9s ease, box-shadow 0.9s ease;

  &:hover {
    background: linear-gradient(2.45deg, #34495e 7.4%, #0b0b26 98.31%);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 830px) {
    border-radius: 12px;
  }
`;

const BurgerContainer = styled.button`
  @media (min-width: 751px) {
    display: none;
  }
`;
const Alist = styled.a`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;
  display: flex;
  border-radius: 8px;
  padding: 6px 15px;
  transition: background-color 0.5s ease, color 0.3s ease;

  &:hover {
    background-color: #34495e;
    color: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 650px;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 0.01em;
  color: #cad1e9;
  margin-left: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  justify-content: space-around;
  height: 86px;
  border-radius: 20px;
  border: 1px solid #1f2035;

  @media (max-width: 830px) {
    align-items: center;
  }
`;
