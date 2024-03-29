"use client";
import styled from "styled-components";
import Image from "next/image";
export default function RemoveSection() {
  return (
    <Wrapper>
      <MiniWrapperOne>
        <Heading>We remove your private information from the online</Heading>
        <Text>
          People-search sites use government records and online databases to
          create detailed profiles of virtually every citizen. 
        </Text>
        <Text>
          They then sell this sensitive information online, where it can end up
          in the hands of hackers, identity thieves, and stalkers.
        </Text>
        <Text>
          ReputationDefender stops people-search sites by opting our clients out
          of them.
        </Text>
      </MiniWrapperOne>
      <MiniWrapperTwo>
        <CardFirst></CardFirst>
        <CardSecond>
          <Line></Line>
          <Line style={{ marginTop: "81px" }}></Line>
          <Line
            style={{
              marginTop: "14px",
              width: "100%",
              maxWidth: "300px",
              background: "#CAD1E9",
            }}
          ></Line>
          <Line
            style={{
              marginTop: "14px",
              width: "100%",
              maxWidth: "300px",
              background: "#CAD1E9",
            }}
          ></Line>
        </CardSecond>
        <MobileWrapper>
          <CircleOne>
            <Image
              src="/image-icon.svg"
              alt="image"
              width={57}
              height={57}
            ></Image>
          </CircleOne>
          <DeleteButton>Delete</DeleteButton>
          <CircleTwo>
            <Image
              src="/ai-lock.svg"
              alt="lock icon"
              width={57}
              height={57}
            ></Image>
          </CircleTwo>
        </MobileWrapper>
      </MiniWrapperTwo>
    </Wrapper>
  );
}

const MobileWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DeleteButton = styled.button`
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

  @media (min-width: 1200px) {
    position: absolute;
    top: 320px;
    right: 470px;
    z-index: 3;
  }
`;

const CircleOne = styled.div`
  width: 100%;
  max-width: 121px;
  height: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b1023;
  border-radius: 30px;
  border: 1px solid;

  @media (min-width: 1200px) {
    position: absolute;
    top: 180px;
    right: 470px;
    z-index: 3;
  }
`;

const CircleTwo = styled.div`
  width: 100%;
  max-width: 121px;
  height: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b1023;
  border-radius: 30px;
  border: 1px solid;

  @media (min-width: 1200px) {
    position: absolute;
    top: 300px;
    right: 30px;
    z-index: 3;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 200px;
  background: white;
  height: 23px;
  border-radius: 32px;
`;

const CardSecond = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  border: 1px solid transparent;
  margin-left: -52px;
  height: 300px;
  margin-top: 52px;
  z-index: 2;
  border-radius: 24px;
  background: #4545f7;
  padding-top: 31px;
  padding-left: 33px;
  padding-right: 20px;
  background: linear-gradient(
    100.42deg,
    rgba(0, 132, 255, 0.16) 7%,
    rgba(255, 171, 144, 0.16) 48.55%,
    rgba(253, 138, 200, 0.16) 101.86%
  );

  border-image-slice: 1;
  @media (min-width: 1150px) {
    max-width: 489px;
    height: 342px;
  }
`;

const CardFirst = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border: 1px solid transparent;

  position: absolute;
  z-index: 1;
  border-radius: 24px;
  background: linear-gradient(
    100.42deg,
    rgba(0, 132, 255, 0.16) 7%,
    rgba(255, 171, 144, 0.16) 48.55%,
    rgba(253, 138, 200, 0.16) 101.86%
  );

  border-image-slice: 1;

  @media (min-width: 1150px) {
    max-width: 489px;
    height: 342px;
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

const MiniWrapperOne = styled.div`
  width: 100%;
  max-width: 553px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;
