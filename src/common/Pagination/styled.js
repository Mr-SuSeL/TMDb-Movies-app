import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 0;
  max-width: 1040px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 24px;
    gap: 12px;
    padding: 0 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    padding: 0 8px;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
  }
`;

export const Button = styled.button`
  min-width: 90px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.divider};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 13px;
  font-weight: 500;

  background-color: ${({ $primary, disabled }) =>
    $primary
      ? disabled
        ? "#bfdbfe"
        : "#3b82f6"
      : disabled
      ? "#e5e7eb"
      : "#f3f4f6"};

  color: ${({ $primary, disabled, theme }) =>
    $primary
      ? theme.color.white
      : disabled
      ? "#9ca3af"
      : "#4b5563"};

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition: background-color 0.15s ease, transform 0.1s ease,
    box-shadow 0.15s ease;

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(15, 23, 42, 0.12);
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 56px;
    padding: 6px 10px;
    font-size: 11px;
  }
`;

export const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkerGrey};

  strong {
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const DesktopLabel = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileLabel = styled.span`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: inline;
    font-size: 14px;
  }
`;
