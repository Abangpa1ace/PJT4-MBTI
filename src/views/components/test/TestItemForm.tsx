import React from 'react'
import styled from 'styled-components'
import s from '@/styles/mixin';
import { slideLeft } from '@/styles/keyframes';

type Props = {
  test: TestItem;
  themeKey: 'green' | 'yellow';
  clickOption: (type: Results) => void;
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

export const ScTestItemForm = styled.div`${s(`flex-column; gap(20); tal;`)}`

const ScTestOption = styled.button<{themeKey: string;}>`
  ${({ theme, themeKey }) => s(`wh(80%,70); bgc(${theme[themeKey][0]}); br(24); o(0); t-x(100%); trans;`)}
  &:hover ${s(`o(0.7);`)}
  &:nth-of-type(2) { animation-delay: .2s; }
  animation: ${slideLeft} .3s ease forwards;
`

export default TestItemForm