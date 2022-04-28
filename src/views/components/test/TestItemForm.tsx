import React from 'react'
import styled from 'styled-components'
import s, { slideLeft, theme } from '@/styles';

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

export const ScTestItemForm = styled.div`${s(`flex-column; gap(20); wf; tal;`)}`

const ScTestOption = styled.button<{themeKey: string;}>`
  ${({ themeKey }) => s(`wh(80%,80); p(10,15); bgc(${theme[themeKey][0]}); fs(18,24); br(24); o(0); t-x(100%); trans;`)}
  &:hover ${s(`o(0.7);`)}
  &:nth-of-type(2) { animation-delay: .2s; }
  white-space: pre-wrap;
  animation: ${slideLeft} .3s ease forwards;
`

export default TestItemForm