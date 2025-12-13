import React from 'react';
import styled from 'styled-components';

const HeaderRoot = styled.header`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.headerBg || '#fff'};
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

export const Header = () => {
  return (
    <HeaderRoot>
      <Title>TMDb Movies App</Title>
    </HeaderRoot>
  );
};

export default Header;
