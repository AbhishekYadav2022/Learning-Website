import React from "react";
import styled from "styled-components";
import dropdownIcon from "../../images/dropdown.svg";

// Styling
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  box-shadow: 0px 1px 10px lightgrey;
  padding: 15px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const LogoAndLinks = styled.div`
  display: flex;
`;
const Logo = styled.div`
  border: 2px solid black;
  min-width: 100px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Link = styled.div`
  margin: 0px 7px 0px 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Dropdown = styled.img`
  transition: 0.2s;
  &:hover {
    transform: rotate(180deg);
  }
`;
const SpecBtns = styled.div`
  display: flex;
`;
const SpecBtn = styled.div`
  border: 1px solid grey;
  min-width: fit-content;
  padding: 10px 15px 10px 15px;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: green;
    border-color: green;
    color: white;
  }
`;
const SpecBtn2 = styled(SpecBtn)`
  background-color: green;
  border-color: green;
  color: white;
  &:hover {
    background-color: white;
    color: green;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <LogoAndLinks>
        <Logo></Logo>
        <Links>
          <Link>
            Classroom Training
            <Dropdown src={dropdownIcon} />
          </Link>
          <Link>
            Online Training
            <Dropdown src={dropdownIcon} />
          </Link>
          <Link>Special-Placed Courses</Link>
          <Link>
            Internship
            <Dropdown src={dropdownIcon} />
          </Link>
          <Link>
            Student's Zone
            <Dropdown src={dropdownIcon} />
          </Link>
          <Link>
            More
            <Dropdown src={dropdownIcon} />
          </Link>
        </Links>
      </LogoAndLinks>
      <SpecBtns>
        <SpecBtn>Become Instructor</SpecBtn>
        <SpecBtn2>Reach Us</SpecBtn2>
      </SpecBtns>
    </Wrapper>
  );
};

export default Navbar;
