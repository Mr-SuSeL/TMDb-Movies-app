import { StyledSpinner, Wrapper } from "./styled";

export const Loader = () => (
  <Wrapper>
    Trwa ładowanie danych, proszę czekać...
    <StyledSpinner />
  </Wrapper>
);