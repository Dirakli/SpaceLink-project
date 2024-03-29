import styled from "styled-components";
import Image from "next/image";
import PricingSectionListItems from "../../shared/PricingSectionListItems";
export default function PricingSection() {
  return (
    <Wrapper>
      <Heading>Cloaking identities stand in for your personal data</Heading>
      <Text>
        Forget about spam, advertising mailings, hacking and attacking robots.
        Keep your real mailbox clean and secure. Temp Mail provides temporary,
        secure, anonymous, free, disposable email address.
      </Text>
      <BoxContainer>
        <Button>Billed yearly -20%</Button>
        Billed monthly
      </BoxContainer>
      <SmallerWrapper>
        <Box>
          <BoxHeading>Start here</BoxHeading>
          <Price>$0</Price>
          <PerMonth>Per month</PerMonth>
          <UnorderedLists>
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Type of threat"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Online Presence"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Access to all modules"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Notability"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="  Optimize existing websites"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Search autocomplete"
            />
          </UnorderedLists>
          <RequestButton>Request access</RequestButton>
          <Span>It’s free so why not</Span>
        </Box>
        <Box style={{ marginTop: "24px" }}>
          <BoxHeading>Single</BoxHeading>
          <Price>$56</Price>
          <PerMonth>Per month</PerMonth>
          <UnorderedLists>
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Type of threat"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Online Presence"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Access to all modules"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Notability"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="  Optimize existing websites"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Search autocomplete"
            />
          </UnorderedLists>

          <RequestButton>Request access</RequestButton>
          <Span>Save $23per year</Span>
        </Box>
        <Box style={{ marginTop: "24px" }}>
          <BoxHeading>Family</BoxHeading>
          <Price>$124</Price>
          <PerMonth>Per month</PerMonth>
          <UnorderedLists>
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Type of threat"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Online Presence"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Access to all modules"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Notability"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="  Optimize existing websites"
            />
            <PricingSectionListItems
              src="/unchecked-mark.svg"
              alt="unchecked mark"
              text="Search autocomplete"
            />
          </UnorderedLists>
          <RequestButton>Request access</RequestButton>
          <Span>Save $23per year</Span>
        </Box>
      </SmallerWrapper>
    </Wrapper>
  );
}

const Span = styled.span`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-weight: 500;
  color: #cad1e9;
`;

const RequestButton = styled.button`
  width: 100%;
  max-width: 312px;
  height: 48px;
  border-radius: 12px;
  margin-top: 36px;
  border: 1px solid;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;
`;

const List = styled.li`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-weight: 500;
  color: #cad1e9;
`;

const UnorderedLists = styled.ul`
  margin-top: 32px;
`;

const PerMonth = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  font-weight: 500;
  color: #cad1e9;
`;

const Price = styled.span`
  font-size: 56px;
  margin-top: 20px;
  line-height: 67px;
  font-weight: 500;
  color: #cad1e9;
`;

const BoxHeading = styled.span`
  font-size: 20px;
  margin-top: 52px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;
`;

const Box = styled.div`
  width: 100%;
  max-width: 352px;
  height: 690px;
  border: 1px solid;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 950px) {
    margin-left: 24px;
  }
`;

const SmallerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid;
  border-radius: 12px;
  width: 100%;
  margin-left: 5px;
  max-width: 181px;
  height: 46px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;
`;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 56px;
  border: 1px solid;
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding-right: 16px;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #cad1e9;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  padding-top: 140px;
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
