import React from "react";
import styled from "styled-components";
import accenture from "../../images/companies/accenture.svg";
import cognizant from "../../images/companies/cognizant.svg";
import hcl from "../../images/companies/hcl.svg";
import ibm from "../../images/companies/ibm.svg";
import mmt from "../../images/companies/mmt.svg";
import thrillophilia from "../../images/companies/thrillophilia.svg";
import wipro from "../../images/companies/wipro.svg";
import zoho from "../../images/companies/zoho.svg";

const Wrapper = styled.div`
  width: 100%;
  background-color: #deffde;
`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  padding-top: 40px;
  text-align: center;
`;
const Companies = styled.div`
  display: flex;
  overflow-x: scroll;
`;
const CompanyContainer = styled.div`
  min-width: 200px;
  /* max-width: 200px; */
  min-height: 200px;
  margin-left: 55px;
  margin-right: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Company = styled.img`
  width: 100%;
`;

const FirstBanner = () => {
  return (
    <>
      <Wrapper>
        <Title>Our Students Work at Renowned Companies & Startups</Title>
        <Companies>
          <CompanyContainer>
            <Company src={cognizant}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={hcl}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={ibm}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={mmt}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={thrillophilia}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={wipro}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={zoho}></Company>
          </CompanyContainer>
          <CompanyContainer>
            <Company src={accenture}></Company>
          </CompanyContainer>
        </Companies>
      </Wrapper>
    </>
  );
};

export default FirstBanner;
