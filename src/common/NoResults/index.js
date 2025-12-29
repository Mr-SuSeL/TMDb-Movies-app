import React from "react";
import { Wrapper, StyledNoResultsPicture, Title } from "./styled";

export const NoResults = ({ query }) => (
  <Wrapper>
    <Title>
      {`Przepraszamy, brak wyników dla "${query}"`}
    </Title>
    <StyledNoResultsPicture />
  </Wrapper>
);