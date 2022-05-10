import s, { media } from '@/styles'
import React from 'react'
import styled from 'styled-components'
import { charOffset } from '@/constants';

type Props = {
  code: TestCodes;
  phase: 'a' | 'b';
  onClick?: () => void;
  className?: string | undefined;
}

type ScProps = {
  x: number;
  y: number;
  phase: 'a' | 'b'
  className?: string;
}

const CharSprite: React.FC<Props> = ({ code, phase, onClick, className }) => {
  return (
    <ScCharSprite {...charOffset[code]} phase={phase} onClick={onClick} className={className} />
  )
}

export const ScCharSprite = styled.div<ScProps>`
  ${s('dib; wh(140,150);')}
  ${({ phase }) => `background-image: url('/src/asset/img/mbti_char_${phase}.jpeg')`};
  ${({ x, y }) => `background-position: ${x}px ${y}px`};
  background-repeat: no-repeat;

  @media ${media.ml} { 
    ${s('t-s(0.8);')}
  }
`

export default CharSprite