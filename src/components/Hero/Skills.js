import React from "react";
import styled from "styled-components";
import arrow from "../../images/arrow2.svg";
import { SkillSeed } from "./SkillSeed";

const Wrapper = styled.div`
  background-color: #f8f9fd;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    position: relative;
    padding-bottom: 90px;
  }
`;
const Head = styled.div`
  margin-left: 50px;
  padding: 50px;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 10px;
    margin: 0;
    align-items: center;
  }
`;
const Title = styled.div`
  font-size: 44px;
  font-weight: 700;
  text-align: left;
  width: 80%;
  @media (max-width: 1000px) {
    font-size: 25px;
    width: 100%;
    margin: 20px 0px;
  }
`;
const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 10px;
  }
`;
const BtnContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  border-radius: 100px;
  margin: 5px;
  border: 2px solid #cacaca;
  background-color: white;
  transition: 0.5s;
  &:hover {
    border-color: green;
    background-color: green;
  }
`;
const Btn = styled.img`
  width: 30px;
`;
const Btn2 = styled(Btn)`
  transform: rotateY(90deg);
`;
const Cards = styled.div`
  display: flex;
  overflow-x: scroll;
`;
const Card = styled.div`
  border-radius: 15px;
  transition: 0.5s;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 10px lightgray;
  &:hover {
    box-shadow: 0px 10px 30px lightgray;
  }
  margin-top: 40px;
  margin-bottom: 100px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 600px) {
    min-width: 100%;
    margin: 0px;
    padding: 0px 10px;
  }
  @media (max-width: 1000px) {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
const CourseName = styled.div`
  background-color: #e7ffe7;
  font-size: 1.2rem;
  color: green;
  font-weight: 500;

  /* First Style  */
  /* background-color: #c4ffc4;
  padding: 15px;
  font-size: 1.2rem;
  color: green; */

  /* Second Style  */
  margin: 15px;
  margin-bottom: 0;
  padding: 5px;
  font-size: 1rem;
  text-align: left;
  width: fit-content;
  border-radius: 5px;
`;
const CardTitle = styled.div`
  font-size: 1.28rem;
  font-weight: 700;
  text-align: left;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Lists = styled.ul`
  font-size: 1.15rem;
  text-align: left;
  padding-left: 35px;
  padding-bottom: 35px;
`;
const ListText = styled.li`
  font-size: 1.15rem;
  text-align: left;
`;
const Skills = () => {
  return (
    <Wrapper>
      <Head>
        <Title>Learn In-Demand Skills With Live Training Courses</Title>
        <ActionBtns>
          <BtnContainer>
            <Btn src={arrow} />
          </BtnContainer>
          <BtnContainer>
            <Btn2 src={arrow} />
          </BtnContainer>
        </ActionBtns>
      </Head>
      <Cards>
        {SkillSeed.map((data, key) => {
          return (
            <Card>
              <ImageContainer>
                <Image src={data.Image}></Image>
              </ImageContainer>
              <CourseName>{data.CourseCatagory}</CourseName>
              <CardTitle>{data.CourseName}</CardTitle>
              <Lists>
                <ListText>{data.Duration}</ListText>
                <ListText>{data.NumOfStudent}</ListText>
              </Lists>
            </Card>
          );
        })}
      </Cards>
    </Wrapper>
  );
};

export default Skills;
