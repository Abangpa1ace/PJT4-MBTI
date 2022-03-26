import { flexCenter } from '@/styles/mixin';
import React from 'react'
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  color: string;
}

const BaseButton: React.FC<Props> = ({ children, color }) => {
  return (
    <ScButton color={color}>{children || '확인'}</ScButton>
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

  ${({ theme, color }) => {
    switch(color) {
      case 'green':
        return css`background: ${theme}; color: white;`
      case 'blue':
        return css`background: #00b8ff; color: white;`
      case 'gray':
        return css`background: #d4d4d4; color: #191919;`
      case 'purple':
      default:
        return css`background: ${theme.purple[1]}; color: white;`
    }
  }}
`;

export default BaseButton