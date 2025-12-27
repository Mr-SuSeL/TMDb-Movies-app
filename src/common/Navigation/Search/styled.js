import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 432px;
  max-width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.divider};
  border-radius: 33px;
  padding: 0 24px;
  gap: 16px;
  justify-self: end;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    width: 100%;
    justify-self: stretch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 38px;
    padding: 0 16px;
    gap: 12px;
  }

  @media (max-width: 320px) {
    height: 44px;
    padding: 0 8px;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkerGrey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;