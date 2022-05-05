import React from 'react'
import styled from 'styled-components'
import s, { slideLeft, theme, media } from '@/styles';

type Props = {
  test: TestItem;
  themeKey: 'green' | 'yellow';
  clickOption: (type: TestAnswer) => void;
}

const TestItemForm: React.FC<Props> = ({ test, themeKey, clickOption }) => {
  return (
    <ScTestItemForm>
      <h2>{test.question}</h2>
      {test && Object.entries(test.options).map(([type, text]) => 
        <ScTestOption key={text} themeKey={themeKey} onClick={() => clickOption(type)}>{text}</ScTestOption>
      )}
    </ScTestItemForm>
  )
}

export const ScTestItemForm = styled.div`${s(`flex-column; gap(20); wf; tal;`)}
  h2 { 
    ${s('c(#595959);')}
    white-space: pre-wrap; 
  }

  @media ${media.ml} { 
    h2 ${s('fs(22,28);')}
  }
`

const ScTestOption = styled.button<{themeKey: string;}>`
  ${({ themeKey }) => s(`wh(80%,80); p(10,15); bgc(${theme[themeKey][0]}); c(#333); fs(18,24); bold; br(24); o(0); t-x(100%); trans;`)}
  &:hover ${s(`o(0.7);`)}
  &:nth-of-type(2) { animation-delay: .2s; }
  white-space: pre-wrap;
  animation: ${slideLeft} .3s ease forwards;

  @media ${media.ml} { 
    ${s('wh(90%, 70); p(6,15); fs(16,22);')}
  }
`

export default TestItemForm