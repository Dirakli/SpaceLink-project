"use client";
import Image from "next/image";
import styled from "styled-components";
export default function Footer() {
  return (
    <Wrapper>
      <SmallWrapper>
        <TitleWrapper>
          <Image
            src="/icon-identity.png"
            alt="pink icon"
            width={24}
            height={27}
          ></Image>
          <Title>identityHub</Title>
        </TitleWrapper>
        <UnorderedList>
          <li
            style={{ fontWeight: "500", fontSize: "18px", cursor: "pointer" }}
          >
            It’s free so why not
          </li>
          <li style={{ marginTop: "24px", opacity: "0.7", cursor: "pointer" }}>
            Pricing
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            Features
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            FAQ
          </li>
        </UnorderedList>
        <UnorderedList>
          <li
            style={{ fontWeight: "500", fontSize: "18px", cursor: "pointer" }}
          >
            Company
          </li>
          <li style={{ marginTop: "24px", opacity: "0.7", cursor: "pointer" }}>
            Our company
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            Security
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            Blog
          </li>
        </UnorderedList>
        <UnorderedList>
          <li
            style={{ fontWeight: "500", fontSize: "18px", cursor: "pointer" }}
          >
            Legal
          </li>
          <li style={{ marginTop: "24px", opacity: "0.7", cursor: "pointer" }}>
            Privacy policy
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            Terms of service
          </li>
          <li style={{ opacity: "0.7", marginTop: "12px", cursor: "pointer" }}>
            Prohibited use policy
          </li>
        </UnorderedList>
      </SmallWrapper>
      <SocialMediaWrapper>
        <MiniWrapperOne>
          <Image
            src="/socialmedia/company.svg"
            alt="company logo"
            width={20}
            height={20}
          ></Image>
          <Span>Company</Span>
        </MiniWrapperOne>
        <MiniWrapperOne>
          <Image
            src="/socialmedia/youtube.svg"
            alt="youtube logo"
            width={20}
            height={20}
          ></Image>
          <Span>Youtube</Span>
        </MiniWrapperOne>
        <MiniWrapperOne>
          <Image
            src="/socialmedia/x.svg"
            alt="x logo"
            width={20}
            height={20}
          ></Image>
          <Span>X</Span>
        </MiniWrapperOne>
        <MiniWrapperOne>
          <Image
            src="/socialmedia/linkedin.svg"
            alt="linkedin logo"
            width={20}
            height={20}
          ></Image>
          <Span>LinkedIn</Span>
        </MiniWrapperOne>
      </SocialMediaWrapper>
    </Wrapper>
  );
}

const MiniWrapperOne = styled.div`
  display: flex;
  cursor: pointer;
  width: 165px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 650px) {
    width: 115px;
  }
`;

const Span = styled.span`
  font-size: 18px;
  line-height: 20px;
  display: flex;
  font-weight: 500;
  color: #cad1e9;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 200px;
  margin-top: 48px;
  justify-content: space-between;
  border-top: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    rgba(45, 46, 72, 0.21) 2.02%,
    #2d2e48 65.05%,
    rgba(45, 46, 72, 0.21) 100.9%
  );

  border-image-slice: 1;
  border-image-repeat: stretch;
  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 48px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    height: 100%;
    min-height: 365px;
  }
`;

const UnorderedList = styled.ul`
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  max-width: 166px;
  color: #cad1e9;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 650px) {
    margin-top: 0px;
    display: flex;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    rgba(45, 46, 72, 0.21) 2.02%,
    #2d2e48 65.05%,
    rgba(45, 46, 72, 0.21) 100.9%
  );

  border-image-slice: 1;
  border-image-repeat: stretch;
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
