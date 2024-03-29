"use client";
import styled from "styled-components";
import Image from "next/image";

export default function SupportSection() {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading>Cloaking identities stand in for your personal data</Heading>
        <Text>
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </Text>
      </TextWrapper>
      <MiniWrapperTwo>
        <CardFirst></CardFirst>
        <CardSecond>
          <Line style={{ height: "23px", maxWidth: "260px" }}></Line>
          <Line
            style={{
              maxWidth: "279px",
              marginTop: "12px",
            }}
          ></Line>
          <Line
            style={{
              maxWidth: "320px",
              background: "#CAD1E9",
              marginTop: "12px",
            }}
          ></Line>
          <Line
            style={{
              maxWidth: "379px",
              background: "#CAD1E9",
              marginTop: "12px",
            }}
          ></Line>
        </CardSecond>
        <ButtonWrapper>
          <CircleOne>
            <Image
              src="/user-icon.png"
              alt="user icon"
              width={52}
              height={52}
            ></Image>
          </CircleOne>
          <CircleTwo>
            <Image
              src="/headphones.svg"
              alt="user icon"
              width={52}
              height={52}
            ></Image>
          </CircleTwo>
          <ReplayButton>Replay</ReplayButton>
        </ButtonWrapper>
      </MiniWrapperTwo>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: 24px;
`;

const CircleOne = styled.div`
  display: flex;
  @media (min-width: 950px) {
    position: absolute;
    margin-top: -260px;
    margin-left: 10px;
    z-index: 5;
  }
`;

const CircleTwo = styled.div`
  display: flex;
  @media (min-width: 950px) {
    position: absolute;
    margin-top: -90px;
    margin-left: 10px;
    z-index: 5;
  }
`;

const ReplayButton = styled.button`
  display: flex;
  width: 100%;
  max-width: 90px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: white;
  height: 43px;
  justify-content: center;
  align-items: center;
  background: #ed5959;
  border-radius: 14px;
  @media (min-width: 950px) {
    position: absolute;
    margin-top: -90px;
    margin-left: 100px;
    z-index: 3;
  }
`;

const MiniWrapperTwo = styled.div`
  width: 100%;
  max-width: 553px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  margin-top: 24px;
`;

const Line = styled.div`
  width: 100%;
  background: white;
  height: 11px;
  border-radius: 32px;
`;

const CardSecond = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  border: 1px solid;
  margin-left: -52px;
  height: 254px;
  margin-top: 52px;
  z-index: 2;
  border-radius: 24px;
  background: #4545f7;
  padding-top: 31px;
  padding-left: 33px;
  padding-right: 20px;

  @media (min-width: 950px) {
    max-width: 489px;
    padding-left: 100px;
  }
`;

const CardFirst = styled.div`
  width: 100%;
  max-width: 400px;
  height: 254px;
  border: 1px solid;
  position: absolute;
  z-index: 1;
  border-radius: 24px;
  background: #4545f7;

  @media (min-width: 950px) {
    max-width: 489px;
  }
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #afb3ca;
`;

const Heading = styled.h1`
  font-size: 36px;
  line-height: 62px;
  font-weight: 500;
  color: #cad1e9;

  @media (min-width: 950px) {
    font-size: 56px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 553px;
  margin-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 950px) {
    margin-left: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
