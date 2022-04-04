import React from 'react'
import styled from 'styled-components'
import s from '@/styles/mixin';
import { extendWidth } from '@/styles/keyframes';

type Props = {
  length: number; 
  index: number;
  themeKey: 'green' | 'yellow';
}

const TestProgressBar: React.FC<Props> = ({ length, index, themeKey }) => {
  return (
    <ScTestProgressBar length={length} themeKey={themeKey} >
      {new Array(length).fill(1).map((_,i) => 
        <li key={`${i}th-bar`} className={i < index ? 'show' : ''} />)
      }
    </ScTestProgressBar>
  )
}

const ScTestProgressBar = styled.ul<{length: number; themeKey: string;}>`
  ${s('flex; h(6); bgc(#e0e0e0); mt(40); br(3); crop;')}

  > li {
    ${({ theme, length, themeKey }) => s(`dn; w(${100/length}%); h(100%); bgc(${theme[themeKey][1]}); o(0);`)}

    &.show { 
      ${s('db; o(.9);')};
      animation: ${extendWidth()} .3s ease forwards;
    }
  }
`

export default TestProgressBar