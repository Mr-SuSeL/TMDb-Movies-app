import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 432px;
  height: 48px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.divider};
  border-radius: 33px;
  padding: 0 24px;
  gap: 16px;
  justify-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1 / -1;
    width: 95%;
    height: 38px;
    margin: 12px auto;
    justify-self: center;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkerGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;