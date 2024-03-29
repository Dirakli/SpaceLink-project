"use client";
import Image from "next/image";
import styled from "styled-components";

export default function PersonalDataSection() {
  return (
    <Wrapper>
      <InfoWrapper>
        <div style={{ width: "100%" }}>
          <MiniWrapperOne>
            <Image
              src="/PersonalData/username.svg"
              alt="username icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>Username</span>
              <span style={{ fontWeight: "500" }}>+1 (456) 453-3456</span>
            </Box>
          </MiniWrapperOne>

          <MiniWrapperOne>
            <Image
              src="/PersonalData/email.svg"
              alt="email icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>Email address</span>
              <span style={{ fontWeight: "500" }}>+1 (456) 453-3456</span>
            </Box>
          </MiniWrapperOne>

          <MiniWrapperOne>
            <Image
              src="/PersonalData/password.svg"
              alt="password icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>Password</span>
              <span style={{ fontWeight: "500" }}>Kas3345-r32</span>
            </Box>
          </MiniWrapperOne>
        </div>
        <Containertwo>
          <MiniWrapperOne>
            <Image
              src="/PersonalData/phone.svg"
              alt="phone icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>Phone numbers</span>
              <span style={{ fontWeight: "500" }}>+1 (456) 453-3456</span>
            </Box>
          </MiniWrapperOne>

          <MiniWrapperOne>
            <Image
              src="/PersonalData/creditcard.svg"
              alt="creditcard icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>Credit card</span>
              <span style={{ fontWeight: "500" }}>+1 (456) 453-3456</span>
            </Box>
          </MiniWrapperOne>

          <MiniWrapperOne>
            <Image
              src="/PersonalData/passcode.svg"
              alt="passcode icon"
              width={52}
              height={52}
            ></Image>
            <Box>
              <span>One-time passcode</span>
              <span style={{ fontWeight: "500" }}>Kas3345-r32</span>
            </Box>
          </MiniWrapperOne>
        </Containertwo>
      </InfoWrapper>
      <TextWrapper>
        <Heading>Cloaking identities stand in for your personal data</Heading>
        <Text>
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Containertwo = styled.div`
  width: 100%;

  @media (min-width: 950px) {
    margin-left: 16px;
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

const MiniWrapperOne = styled.button`
  width: 100%;
  height: 74px;
  border-radius: 20px;
  border: 1px solid;
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

  @media (min-width: 950px) {
    width: 242px;
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

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 553px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: flex-start;
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
