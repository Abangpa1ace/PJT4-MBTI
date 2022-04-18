import React, { memo } from 'react'
import styled, { css } from 'styled-components';
import s from '@/styles/mixin';

type Props = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const BaseButton: React.FC<Props> = ({ children, className, color, onClick }) => {
  return (
    <ScBaseButton className={className} color={color} onClick={onClick}>{children || '확인'}</ScBaseButton>
  )
}

export const ScBaseButton = styled.button` 
  ${s(`min-w(350); h(56); br(28); trans(.3s, opacity); flex-center; trans;`)}

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

export default memo(BaseButton)