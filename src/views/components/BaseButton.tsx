import { flexCenter } from '@/styles/mixin';
import React from 'react'
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  theme: string;
}

const BaseButton: React.FC<Props> = ({ children, theme }) => {
  return (
    <ScButton theme={theme}>{children || '확인'}</ScButton>
  )
}

const ScButton = styled.button`
  ${flexCenter};
  height: 40px;
  padding: 0 50px;
  border-radius: 20px;
  transition: opacity .3s ease;
  &:hover {
    opacity: 0.7;
  }

  ${({ theme }) => {
    switch(theme) {
      case 'green':
        return css`background: #50e3c2; color: white;`
      case 'blue':
        return css`background: #00b8ff; color: white;`
      default:
        return css`background: #d4d4d4; color: #191919;`
    }
  }}
`;

export default BaseButton