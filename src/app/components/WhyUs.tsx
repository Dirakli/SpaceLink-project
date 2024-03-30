"use client";
import styled from "styled-components";
import Image from "next/image";

export default function WhyUs() {
  return (
    <Wrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading>Why choose us</Heading>
        <Text>
          We are the only service that provides all 3 services as a packaged
          service
        </Text>
      </div>
      <Container>
        <Box>
          <HeadingSecond>Personal information removal</HeadingSecond>
          <TextSecond>
            We purge your personal data from online sources, using automated and
            manual methods. A privacy expert oversees removals and handles any
            manual activities.
          </TextSecond>
          <CardSecond>
            <Line style={{ maxWidth: "473px" }}></Line>
            <Line
              style={{
                maxWidth: "473px",
                marginTop: "12px",
              }}
            ></Line>
            <Line
              style={{
                maxWidth: "378px",
                background: "#CAD1E9",
                marginTop: "12px",
                opacity: "0.6",
              }}
            ></Line>
            <Line
              style={{
                maxWidth: "308px",
                background: "#CAD1E9",
                marginTop: "12px",
                opacity: "0.3",
              }}
            ></Line>
            <Line
              style={{
                maxWidth: "261px",
                background: "#CAD1E9",
                marginTop: "12px",
                opacity: "0.3",
              }}
            ></Line>
          </CardSecond>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "520px",
              marginTop: "24px",
              position: "relative",
            }}
          >
            <ImageDiv>
              <Image
                src="/information-icon.svg"
                alt="information icon"
                width={48}
                height={48}
              ></Image>
            </ImageDiv>
            <ReplayButton>Replay</ReplayButton>
          </div>
        </Box>
        <Box>
          <HeadingSecond>Cloaking alias profiles</HeadingSecond>
          <TextSecond>
            You’ll receive regular reports on your privacy status and any
            outstanding threats. If new records become associated with you, we
            will send you an alert.
          </TextSecond>
          <Image
            src="/small-green-sign.svg"
            alt="green sign"
            width={106}
            height={112}
          ></Image>
          <CardWrapper>
            <Image
              src="/user-icon.png"
              alt="card icon"
              width={52}
              height={52}
              style={{ width: "52px", height: "52px" }}
            ></Image>
            <SmallWrapper>
              <SmallList
                style={{ maxWidth: "236px", marginTop: "0px" }}
              ></SmallList>
              <SmallList
                style={{ maxWidth: "126px", opacity: "0.5" }}
              ></SmallList>
              <SmallList
                style={{ maxWidth: "71px", opacity: "0.5" }}
              ></SmallList>
            </SmallWrapper>
          </CardWrapper>
        </Box>
      </Container>
      <div
        style={{
          width: "100%",
          marginTop: "24px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "140px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DetailWrapper>
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <HeadingSecond>Detailed Reporting</HeadingSecond>
            <TextSecond>
              You’ll receive regular reports on your privacy status and any
              outstanding threats. If new records become associated with you, we
              will send you an alert.
            </TextSecond>
          </div>
          <CardWrapper>
            <Image
              src="/details-icon.svg"
              alt="details icon"
              width={152}
              height={152}
            ></Image>
            <SmallWrapper>
              <SmallList
                style={{ maxWidth: "236px", marginTop: "0px" }}
              ></SmallList>
              <SmallList
                style={{ maxWidth: "126px", opacity: "0.5" }}
              ></SmallList>
              <SmallList
                style={{ maxWidth: "126px", opacity: "0.5" }}
              ></SmallList>
              <SmallList
                style={{ maxWidth: "71px", opacity: "0.5" }}
              ></SmallList>
            </SmallWrapper>
          </CardWrapper>
        </DetailWrapper>
      </div>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 20px;
  max-width: 600px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
  }
`;

const ImageDiv = styled.div`
  @media (min-width: 1150px) {
    position: absolute;
    bottom: 260px;
    left: 30px;
  }
`;

const SmallList = styled.div`
  width: 100%;
  max-width: 150px;
  background: white;
  margin-top: 16px;
  height: 11px;
  border-radius: 32px;
`;

const SmallWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  margin-left: 24px;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  padding: 28px;
  border: 1px solid transparent;
  margin-top: 42px;
  border-radius: 20px;
  justity-content: flex-start;
  width: 100%;
  max-width: 484px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  @media (min-width: 950px) {
    margin-top: 0px;
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

  @media (min-width: 1150px) {
    position: absolute;
    bottom: 60px;
    left: 30px;
    z-index: 7;
  }
`;

const Line = styled.div`
  width: 100%;
  background: white;
  height: 11px;
  margin-top: 20px;
  border-radius: 32px;
`;

const CardSecond = styled.div`
  width: 100%;
  max-width: 520px;
  position: relative;
  border: 1px solid transparent;
  height: 272px;
  border-radius: 24px;
  background: #4545f7;
  padding-top: 31px;
  padding-left: 33px;
  padding-right: 20px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  @media (min-width: 950px) {
    padding-bottom: 70px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TextSecond = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #afb3ca;
`;

const HeadingSecond = styled.h1`
  font-size: 32px;
  line-height: 50px;
  font-weight: 500;
  color: #cad1e9;
`;

const Box = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  min-height: 504px;
  margin-top: 20px;
  height: 560px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid transparent;
  flex-direction: column;
  justify-content: space-around;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 16px;
  padding: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #afb3ca;
`;

const Heading = styled.h1`
  font-size: 36px;
  line-height: 62px;
  text-align: start;
  padding-left: 20px;
  font-weight: 500;
  color: #cad1e9;

  @media (min-width: 950px) {
    font-size: 56px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
