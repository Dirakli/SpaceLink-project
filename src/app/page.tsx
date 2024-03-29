"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import PrivacySection from "./components/PrivacySection";
import RemoveSection from "./components/RemoveSection";
import PersonalDataSection from "./components/PersonalDataSection";
import SupportSection from "./components/SupportSection";
import WhyUs from "./components/WhyUs";
import HubSection from "./components/HubSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <PrivacySection />
        <RemoveSection />
        <PersonalDataSection />
        <SupportSection />
        <WhyUs />
        <HubSection />
        <PricingSection />
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #02041a;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #02041a;
`;
