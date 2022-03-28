import React, { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import qs from 'qs';
import styled from 'styled-components'
import testListObject from '@/data/testList';
import { arrShuffle } from '@/utils';
import s, { container } from '@/styles/mixin';


const TestPage = () => {
  const { search } = useLocation()
  const { type } = qs.parse(search, { ignoreQueryPrefix: true });
  const navigate = useNavigate()

  const testList = useRef(arrShuffle(testListObject[`type${String(type).toUpperCase()}`].map((t, i) => { return {...t, question: `${t.question} ${i+1}`} })))
  const index = useRef<number>(0)

  const [test, setTest] = useState<TestItem>(testList.current[index.current])

  const clickOption = (category, option) => {
    if (index.current === testList.current.length - 1) navigate('/mid-result')
    index.current++;
    setTest(testList.current[index.current])
  }

  return (
    <ScTestPage>
      <h2>{test.question}</h2>
      {test && Object.values(test.options).map(option => 
        <ScTestOption key={option} onClick={() => clickOption(test.category, option)}>{option}</ScTestOption>
      )}
    </ScTestPage>
  )
}

const ScTestPage = styled.div`
  ${container};
  ${s(`flex-column; gap(20); tac;`)}
`

const ScTestOption = styled.button`${s(`wh(80%,80); bgc(#b8fff0); br(20); trans;`)}
  &:hover ${s(`o(.7);`)}
  animation: transButton .3s ease;
`

export default TestPage