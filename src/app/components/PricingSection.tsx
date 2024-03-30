import styled from "styled-components";
import Image from "next/image";
import PricingSectionListItems from "../../shared/PricingSectionListItems";
export default function PricingSection() {
  return (
    <Wrapper>
      <Heading>Pricing</Heading>
      <Text style={{ marginTop: "16px" }}>
        You can stay on the $56 plan until you have enough active user to
        justify managing their data or you start settings things.
      </Text>
      <BoxContainer style={{ marginTop: "44px" }}>
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
        <Box style={{ height: "690px" }}>
          <BoxHeading>Single</BoxHeading>
          <ColoredPrice>$56</ColoredPrice>
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
              src="/checked-mark.svg"
              alt="checked mark"
              text="Notability"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="  Optimize existing websites"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="Search autocomplete"
            />
          </UnorderedLists>

          <RequestButton>Request access</RequestButton>
          <Span>Save $23per year</Span>
        </Box>
        <Box>
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
              src="/checked-mark.svg"
              alt="checked mark"
              text="Notability"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
              text="  Optimize existing websites"
            />
            <PricingSectionListItems
              src="/checked-mark.svg"
              alt="checked mark"
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
  border: 1px solid transparent;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;
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

const ColoredPrice = styled.span`
  font-size: 56px;
  margin-top: 20px;
  line-height: 67px;
  font-weight: 500;
  color: #cad1e9;

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
  height: 634px;
  border: 1px solid transparent;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;

  @media (min-width: 950px) {
    margin-left: 24px;
  }
`;

const SmallerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  border: 1px solid transparent;
  border-radius: 12px;
  width: 100%;
  margin-left: 5px;
  max-width: 181px;
  height: 46px;
  line-height: 20px;
  font-weight: 500;
  color: #cad1e9;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;
`;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 56px;
  border: 1px solid transparent;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding-right: 16px;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #cad1e9;

  background: linear-gradient(
    137.34deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
  border-image-slice: 1;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  padding-top: 140px;
`;

const Text = styled.p`
  width: 100%;
  max-width: 480px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  font-weight: 400;
  color: #afb3ca;
`;

const Heading = styled.h1`
  font-size: 36px;
  margin: 0 auto;
  line-height: 62px;
  font-weight: 500;
  color: #cad1e9;

  @media (min-width: 950px) {
    font-size: 56px;
  }
`;
