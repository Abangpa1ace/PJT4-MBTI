import React from 'react'
import styled, { keyframes } from 'styled-components'
import s from '@/styles/mixin';

type Props = {
  length: number; 
  index: number;
  themeKey: 'green' | 'yellow';
}

const TestProgressBar: React.FC<Props> = ({ length, index, themeKey }) => {
  return (
    <ScTestProgressBar length={length} themeKey={themeKey} >
      {new Array(length).fill(1).map((_,i) => 
        <li key={`${i}th-bar`} className={i <= index ? 'show' : ''} />)
      }
    </ScTestProgressBar>
  )
}

const ScTestProgressBar = styled.ul<{length: number; themeKey: string;}>`
  ${s('flex; h(6); bgc(#e0e0e0); mt(40); br(3); crop;')}

  > li {
    ${({ theme, themeKey }) => s(`dn; h(100%); bgc(${theme[themeKey][1]}); o(0);`)}
    width: calc(100%/16);

    &.show { 
      ${s('db; o(.9);')};
      animation: ${({ length }) => extendBar(length)} .3s ease forwards;
    }
  }
`

const extendBar = (length: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: calc(100%/${length});
  }
`

export default TestProgressBar