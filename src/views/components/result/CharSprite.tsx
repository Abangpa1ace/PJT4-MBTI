import s from '@/styles'
import React from 'react'
import styled from 'styled-components'
import { charOffset } from '@/constants';

type Props = {
  code: TestCodes;
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
  ${s('dib; wh(140,150);')}
  ${({ phase }) => `background-image: url('/src/asset/img/mbti_char_${phase}.jpeg')`};
  ${({ x, y }) => `background-position: ${x}px ${y}px`};
  background-repeat: no-repeat;
`

export default CharSprite