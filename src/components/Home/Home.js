import React from "react";
import FirstBanner from "../Hero/FirstBanner";
import Hero from "../Hero/Hero";
import Skills from "../Hero/Skills";
import TeachingMedium from "../Hero/TeachingMedium";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import LinkPreview from "../LinkPreview/LinkPreview";

const Container = styled.div``;
const PageContainer = styled.div`
  border: 2px solid green;
`;

export const Home = () => {
  return (
    <Container>
      <PageContainer>
        <Navbar />
        <Hero />
        <FirstBanner />
        <TeachingMedium />
        <Skills />
        <LinkPreview />
      </PageContainer>
    </Container>
  );
};
