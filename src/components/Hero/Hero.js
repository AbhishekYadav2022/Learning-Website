import React from "react";
import styled from "styled-components";
import banner from "../../images/banner.png";
import PlayIcon from "../../images/playIcon1.svg";

const Wrapper = styled.div`
  display: flex;
  padding: 80px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;
const TextSection = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const Slogan = styled.div`
  text-align: left;
  font-size: 1.15rem;
  margin-bottom: 15px;
`;
const MainText = styled.div`
  text-align: left;
  font-size: 3.5rem;
  font-weight: 800;
  color: #272727;
  @media (max-width: 1000px) {
    text-align: center;
    font-size: 2.5rem;
  }
`;
const SmallText = styled.div`
  text-align: left;
  font-size: 1.15rem;
  width: 80%;
  font-size: 1.1rem;
  margin-top: 25px;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;
const MainBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  width: 450px;
`;
const MainBtn = styled.div`
  border: 2px solid green;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 1px solid grey;
  cursor: pointer;
  background-color: green;
  border-color: green;
  color: white;
  transition: 0.5s;
  &:hover {
    background-color: white;
    color: green;
  }
`;
const Play = styled.img`
  transition: 0.5s;
  width: 22px;
  margin-right: 7px;
  &:hover {
    transform: rotate(360deg);
  }
`;
const MainBtn2 = styled(MainBtn)`
  border-color: grey;
  background-color: white;
  color: black;
  &:hover {
    background-color: green;
    color: white;
    border-color: green;
  }
`;
const ImageSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const Hero = () => {
  return (
    <>
      <Wrapper>
        <TextSection>
          <Slogan>Success-oriented learning!</Slogan>
          <MainText>
            Give Wings to Your Career By Learning Today's Most-Demanded Skills
          </MainText>
          <SmallText>
            Online & Offline training in Digital Marketing, Web/App Development,
            Python, and 20+ more domains.
          </SmallText>
          <MainBtns>
            <MainBtn>Explore Courses</MainBtn>
            <MainBtn2>
              <Play src={PlayIcon} />
              Book Free Class
            </MainBtn2>
          </MainBtns>
        </TextSection>
        <ImageSection>
          <Image src={banner} />
        </ImageSection>
      </Wrapper>
    </>
  );
};

export default Hero;
