import React from 'react'
import styled from 'styled-components'
import s from '@/styles/mixin';

type Props = {
  test: TestItem;
  clickOption: (type: string, q: string) => void;
}

const TestItemForm: React.FC<Props> = ({ test, clickOption }) => {
  return (
    <ScTestForm>
      <h2>{test.question}</h2>
      {test && Object.entries(test.options).map(([type, text]) => 
        <ScTestOption key={text} onClick={() => clickOption(type, test.question)}>{text}</ScTestOption>
      )}
    </ScTestForm>
  )
}

const ScTestForm = styled.div`
  ${s(`flex-column; gap(20); tac;`)}
`

const ScTestOption = styled.button`${s(`wh(80%,80); bgc(#b8fff0); br(20); trans;`)}
  &:hover ${s(`o(.7);`)}
  animation: transButton .3s ease;
`

export default TestItemForm