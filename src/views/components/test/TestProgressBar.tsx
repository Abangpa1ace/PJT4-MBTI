import React from 'react'
import styled from 'styled-components'
import s, { extendWidth, theme } from '@/styles';

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
  ${s('flex; wh(100%,6); bgc(#e0e0e0); br(3); crop;')}

  > li {
    ${({ length, themeKey }) => s(`w(${100/length}%); h(100%); bgc(${theme[themeKey][1]}); o(0); -a(Red))`)}

    &.show { 
      ${s('o(.9);')};
      animation: ${extendWidth(`${100/length}%`)} .3s ease forwards;
    }
  }
`

export default TestProgressBar