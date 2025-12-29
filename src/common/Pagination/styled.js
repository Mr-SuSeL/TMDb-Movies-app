import styled from "styled-components";

export const Icon = styled.svg`
  width: 7px;
  height: 11px;
  flex: 0 0 auto;
  color: ${({ $color }) => $color || "rgba(126, 131, 154, 1)"};

  transform: ${({ $direction }) => ($direction === "right" ? "rotate(180deg)" : "none")};
`;

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
  min-width: 76px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;

  opacity: ${({ disabled }) => (disabled ? 0.55 : 1)};

  background-color: ${({ $primary, disabled }) =>
  disabled
    ? $primary
      ? "rgba(214, 228, 255, 1)"
      : "rgba(228, 230, 240, 1)"
    : $primary
      ? "rgba(214, 228, 255, 1)"
      : "rgba(228, 230, 240, 1)"};

  color: ${({ $primary, disabled }) =>
    disabled ? "#9ca3af" : $primary ? "rgba(51, 51, 51, 1)" : "#4b5563"};

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    ${({ disabled, $primary }) =>
      !disabled &&
  ($primary
    ? `background-color: rgba(224, 236, 255, 1);`
    : `background-color: rgba(236, 238, 246, 1);`)}
  }

  &:active {
    ${({ disabled, $primary }) =>
      !disabled &&
  ($primary
    ? `background-color: rgba(235, 244, 255, 1);`
    : `background-color: rgba(242, 244, 250, 1);`)}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 56px;
    height: 32px;
    padding: 6px 10px;
    font-size: 11px;
  }
`;

export const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkerGrey};

  strong {
    color: rgba(24, 24, 27, 1);
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const DesktopLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileLabel = styled.span`
  display: none;

  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: inline-flex;
    font-size: 14px;
  }
`;
