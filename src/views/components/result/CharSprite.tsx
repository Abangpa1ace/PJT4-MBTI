import s from '@/styles/mixin'
import React from 'react'
import styled from 'styled-components'
import { charOffset } from '@/constants';

type Props = {
  code: Codes;
  phase: 'a' | 'b'
}

type ScProps = {
  x: number;
  y: number;
  phase: 'a' | 'b'
}

const CharSprite: React.FC<Props> = ({ code, phase }) => {
  return (
    <ScCharSprite {...charOffset[code]} phase={phase} />
  )
}

const ScCharSprite = styled.div<ScProps>`
  ${s('wh(140,150); -a(red);')}
  ${({ phase }) => `background-image: url('/src/asset/img/mbti_char_${phase}.jpeg')`};
  ${({ x, y }) => `background-position: ${x}px ${y}px`};
  background-repeat: no-repeat;
`

export default CharSprite