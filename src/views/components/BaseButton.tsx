import React from 'react'
import styled, { css } from 'styled-components';
import s from '@/styles/mixin';

type Props = {
  children: React.ReactNode;
  className?: string;
  color: string;
}

const BaseButton: React.FC<Props> = ({ children, className, color }) => {
  return (
    <ScButton className={className} color={color}>{children || '확인'}</ScButton>
  )
}

const ScButton = styled.button` 
  ${s(`h(40); p(0,50); br(20); trans(.3s, opacity); flex-center; trans;`)}

  &:hover {
    ${s(`o(.7)`)}
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
        return s(`bgc(${theme.purple[1]}); c(white)`)
    }
  }}
`;

export default BaseButton