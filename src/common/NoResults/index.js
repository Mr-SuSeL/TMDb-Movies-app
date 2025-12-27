import React from "react";
import { Wrapper, StyledNoResultsPicture, Title } from "./styled";

export const NoResults = ({ query }) => (
  <Wrapper>
    <Title>
      {`Sorry, there are no results for "${query}"`}
    </Title>
    <StyledNoResultsPicture />
  </Wrapper>
);