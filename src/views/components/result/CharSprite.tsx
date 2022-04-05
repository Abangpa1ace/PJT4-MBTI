import s from '@/styles/mixin'
import React from 'react'
import styled from 'styled-components'

type Props = {
  code: string;
  phase: 'a' | 'b'
}

type ScProps = {
  phase: 'a' | 'b'
}

const CharSprite: React.FC<Props> = ({ code, phase }) => {
  return (
    <ScCharSprite code={code} phase={phase}>

    </ScCharSprite>
  )
}

const ScCharSprite = styled.div<ScProps>`
  ${s('wh(140,150); -a(red);')}
  ${({ phase }) => `background-image: url('/src/asset/img/mbti_char_${phase}.jpeg')`};
  background-position: -350px -350px;
  background-repeat: no-repeat;
`

export default CharSprite