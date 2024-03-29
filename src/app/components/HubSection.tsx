import Image from "next/image";
import styled from "styled-components";

export default function HubSection() {
  return (
    <MainWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading>The word on IdentityHub</Heading>
        <Text>
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </Text>
      </div>
      <Wrapper>
        <div>
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Williamson.svg"
                alt="surname"
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
              ></Image>
              <Name>Cameron Williamson</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
          <Box style={{ marginTop: "17px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Steward.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Darrell Steward</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
        </div>
        <div>
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Alexander.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Leslie Alexander</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address. Stalkers and disgruntled acquaintances use the Internet
              to find addresses, phone numbers and other personal details about
              their targets. Identity thieves use personal information.
            </Paragraph>
          </Box>
          <Box style={{ marginTop: "17px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Miles.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Floyd Miles</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
        </div>
        <div>
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Hawkins.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Guy Hawkins</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address. Identity thieves use personal information found online to
              impersonate their.
            </Paragraph>
          </Box>
          <Box style={{ marginTop: "17px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Nguyen.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Savannah Nguyen</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
        </div>
        <div>
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Simmons.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Brooklyn Simmons</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
          <Box style={{ marginTop: "17px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Surnames/Fisher.svg"
                alt="surname"
                width={36}
                height={36}
              ></Image>
              <Name>Cody Fisher</Name>
            </div>
            <Paragraph>
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </Paragraph>
          </Box>
        </div>
      </Wrapper>
    </MainWrapper>
  );
}

const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #afb3ca;
`;

const Name = styled.div`
  font-size: 20px;
  line-height: 24px;
  margin-left: 12px;
  font-weight: 500;
  color: #cad1e9;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin-top: 58px;
  max-width: 1200px;
  gap: 17px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  max-width: 287px;
  border: 1px solid transparent;
  padding-top: 20px;
  border-radius: 20px;
  padding-left: 12px;
  padding-right: 12px;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;
`;

const Text = styled.p`
  width: 100%;
  max-width: 600px;
  text-align: start;
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
  padding-left: 20px;
  font-weight: 500;
  color: #cad1e9;

  @media (min-width: 950px) {
    font-size: 56px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
