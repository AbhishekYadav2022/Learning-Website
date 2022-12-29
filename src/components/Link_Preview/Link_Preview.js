import React from "react";
import styled from "styled-components";

const Head = styled.h1``;
const Content = styled.div`
  border: 1px solid green;
  min-height: 150px;
  margin: 10px;
  padding: 10px;
`;

function Link_Preview() {
  return (
    <div>
      <Head>This is link preview</Head>
      <Content>This is link preview content</Content>
    </div>
  );
}

export default Link_Preview;
