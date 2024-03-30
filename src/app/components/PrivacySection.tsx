"use client";
import styled from "styled-components";
import Image from "next/image";
export default function PrivacySection() {
  return (
    <Wrapper>
      <Img src="/rainbow.svg" alt="rainbow image" />
      <PrivacyWrapper>
        <Heading>
          <Span>Protect your</Span> privacy online
        </Heading>
        <Text>
          IdentityHub offers a suite of services to help you take back control
          of your online identity. Keep your data secure, manage your digital
          footprint, and protect yourself from identity theft.
        </Text>
        <ButtonContainer>
          <ButtonOne>
            <TextFreeTrial>Start free trial</TextFreeTrial>
            <Image
              style={{ marginLeft: "8px" }}
              src="/pink-arrow.svg"
              alt="arrow"
              width={7}
              height={8}
            ></Image>
          </ButtonOne>
          <ButtonTwo>
            <Circle>
              <Image
                src={"/play-icon.svg"}
                alt="arrow"
                width={10}
                height={10}
              ></Image>
            </Circle>
            <p style={{ marginLeft: "10px" }}>How it works</p>
          </ButtonTwo>
        </ButtonContainer>
      </PrivacyWrapper>
      <EmailUserWrapper>
        <Image
          style={{ margin: "0 auto" }}
          src="/lock-icon.svg"
          alt="arrow"
          width={300}
          height={320}
          className=""
        ></Image>
        <MiniWrapperOne>
          <Image
            src="/email-icon.png"
            alt="email icon"
            width={52}
            height={52}
          ></Image>
          <Box>
            <span>Email address</span>
            <span style={{ fontWeight: "500" }}>nija@gmail.com</span>
          </Box>
        </MiniWrapperOne>
        <MiniWrapperTwo>
          <Image
            src="/user-icon.png"
            alt="user icon"
            width={52}
            height={52}
          ></Image>
          <Box>
            <span>User name</span>
            <span style={{ fontWeight: "500" }}>tufayel nija</span>
          </Box>
        </MiniWrapperTwo>
      </EmailUserWrapper>
    </Wrapper>
  );
}

const Img = styled.img`
  height: 600px;
  top: 90px;
  position: absolute;
  display: none;

  @media (min-width: 950px) {
    display: block;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #afb3ca;
`;

const MiniWrapperOne = styled.button`
  width: 100%;
  max-width: 400px;
  height: 74px;
  border-radius: 20px;
  border: 1px solid transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  margin-top: 24px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  border-radius: 20px;

  @media (min-width: 1150px) {
    max-width: 242px;
    position: absolute;
    margin-top: 30px;
    right: 350px;
  }
`;

const MiniWrapperTwo = styled.button`
  width: 100%;
  max-width: 400px;
  height: 74px;
  border-radius: 20px;
  border: 1px solid transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  margin-top: 24px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  border-radius: 20px;

  @media (min-width: 1150px) {
    max-width: 242px;
    position: absolute;
    margin-top: 270px;
    margin-left: -200px;
  }
`;

const EmailUserWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 523px;
  padding: 20px;

  @media (min-width: 950px) {
    align-items: center;
  }
`;

const TextFreeTrial = styled.p`
  color: linear-gradient(
    90.63deg,
    #b67efd 0.9%,
    #f088d2 55.08%,
    #ffad8b 109.04%
  );
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  background: linear-gradient(
    90.63deg,
    #b67efd 0.9%,
    #f088d2 55.08%,
    #ffad8b 109.04%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid white;
`;

const ButtonTwo = styled.button`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: 600;
  color: #cad1e9;
  border-radius: 16px;
  border: 1px solid transparent;
  margin-top: 16px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  @media (min-width: 950px) {
    max-width: 175px;
    margin-top: 0;
    margin-left: 16px;
  }
`;

const ButtonOne = styled.button`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: 600;
  border: 1px solid transparent;
  border-image-slice: 1;
  padding: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      271.77deg,
      #ffab8f 1.49%,
      #ff8ec1 58.26%,
      #b67efd 116.36%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media (min-width: 950px) {
    max-width: 175px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #afb3ca;
  margin-top: 28px;
`;
const Span = styled.span`
  background: linear-gradient(
    90.63deg,
    #b67efd 0.9%,
    #f088d2 55.08%,
    #ffad8b 109.04%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #cad1e9;

  @media (min-width: 950px) {
    font-size: 68px;
    line-height: 74px;
  }
`;

const PrivacyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  max-width: 523px;
`;

const Wrapper = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #1f2035;
  padding-top: 60px;
  padding-bottom: 60px;
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
