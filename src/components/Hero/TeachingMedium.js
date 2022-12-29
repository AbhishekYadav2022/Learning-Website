import React from "react";
import styled from "styled-components";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import hintImage from "../../images/e-learn-center.webp";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 5px;
  }
`;
const Title = styled.div`
  font-size: 2.5rem;
  width: 60%;
  font-weight: 700;
  text-align: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Desc = styled.div`
  padding: 25px;
  font-size: 1.2rem;
  margin-bottom: 50px;
`;
const Cards = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 40px;
  }
`;
const Card = styled.div`
  border-radius: 15px;
  width: 30.33%;
  transition: 0.5s;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 30px lightgray;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin: 7px 0px;
  }
`;
const ImageContainer = styled.div`
  height: 230px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;
const Image = styled.img`
  height: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;
const CardTitle = styled.div`
  font-size: 1.27rem;
  font-weight: 700;
  text-align: left;
  padding: 15px;
`;
const CardDesc = styled.div`
  font-size: 1.15rem;
  text-align: left;
  padding: 15px;
`;
const StartBtn = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  padding: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: green;
  }
`;
const AboutInstitute = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 30px;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 5px;
  }
`;
const Photo = styled.div`
  width: 45%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const HintImage = styled.img`
  width: 100%;
`;
const InstituteDesc = styled.div`
  width: 45%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
const InstituteDescTitle = styled.div`
  font-size: 2.27rem;
  font-weight: 700;
  text-align: left;
  @media (max-width: 1000px) {
    margin: 30px 0px;
  }
`;
const InstituteDescText = styled.div`
  text-align: left;
  margin: 35px 0px;
`;
const Lists = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
const ListIconContainer = styled.div`
  margin-right: 20px;
`;
const ListIcon = styled.img`
  width: 50px;
`;
const ListText = styled.div``;
const ListHead = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 15px;
`;
const ListBody = styled.div`
  text-align: left;
  margin-bottom: 15px;
`;
const LearnMoreBtn = styled.div`
  border: 1px solid grey;
  min-width: fit-content;
  padding: 10px 15px 10px 15px;
  margin-top: 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  background-color: green;
  border-color: green;
  color: white;
  &:hover {
    background-color: white;
    color: green;
  }
`;

const TeachingMedium = () => {
  return (
    <Wrapper>
      <Title>
        Build & Level Up Your Career While Learning The Way You Want
      </Title>
      <Desc>
        Whether you want to learn online, offline, or at your pace, we have got
        it covered for you!
      </Desc>
      <Cards>
        <Card>
          <ImageContainer>
            <Image src={image1}></Image>
          </ImageContainer>
          <CardTitle>Classroom Training In Jodhpur</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
            autem, ipsam ex, maxime tempore pariatur eligendi quasi iusto
            necessitatibus laborum temporibus
          </CardDesc>
          <StartBtn>Get Started</StartBtn>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={image2}></Image>
          </ImageContainer>
          <CardTitle>Self-Placed Certification Courses</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
            autem, ipsam ex, maxime tempore pariatur eligendi quasi iusto
            necessitatibus laborum temporibus
          </CardDesc>
          <StartBtn>Get Started</StartBtn>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={image3}></Image>
          </ImageContainer>
          <CardTitle>Online Live Training</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
            autem, ipsam ex, maxime tempore pariatur eligendi quasi iusto
            necessitatibus laborum temporibus
          </CardDesc>
          <StartBtn>Get Started</StartBtn>
        </Card>
      </Cards>
      <AboutInstitute>
        <Photo>
          <HintImage src={hintImage}></HintImage>
        </Photo>
        <InstituteDesc>
          <InstituteDescTitle>
            WsCube Tech: India's Most-Trusted IT Training Institute
          </InstituteDescTitle>
          <Lists>
            <InstituteDescText>
              WsCube Tech is the leading IT training institute and software
              development company in India. With headquarters in Jodhpur
              (Rajasthan), we are on a mission to skill, reskill, and upskill
              individuals in the ever-evolving technology domains.
            </InstituteDescText>
            <ListItem>
              <ListIconContainer>
                <ListIcon src={image1} />
              </ListIconContainer>
              <ListText>
                <ListHead>Offering Professional Training Since 2011</ListHead>
                <ListBody>
                  Over the last decade, we have trained 1,50,000+ students &
                  working professionals, and offered internship opportunities to
                  thousands of candidates.
                </ListBody>
              </ListText>
            </ListItem>
            <ListItem>
              <ListIconContainer>
                <ListIcon src={image1} />
              </ListIconContainer>
              <ListText>
                <ListHead>Bridging Skills Gap in IT Industry</ListHead>
                <ListBody>
                  At WsCube Tech, our mission is to prepare learners for the
                  skills of today and tomorrow, and pave the way for a
                  successful career path.
                </ListBody>
              </ListText>
            </ListItem>
            <ListItem>
              <LearnMoreBtn>Learn More</LearnMoreBtn>
            </ListItem>
          </Lists>
        </InstituteDesc>
      </AboutInstitute>
    </Wrapper>
  );
};

export default TeachingMedium;
