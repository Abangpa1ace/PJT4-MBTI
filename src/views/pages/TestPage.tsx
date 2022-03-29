import React, { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import qs from 'qs';
import styled from 'styled-components'
import testData from '@/data/testList';
import { arrShuffle } from '@/utils';
import { container } from '@/styles/mixin';
import TestItemForm from '../components/TestItemForm';

const TestPage: React.FC = () => {
  const { search } = useLocation()
  const { phase } = qs.parse(search, { ignoreQueryPrefix: true });
  const isPhaseA = phase === 'a'
  const navigate = useNavigate()

  const testList = useRef<TestResultList>(arrShuffle([...testData[isPhaseA ? 'phaseA' : 'phaseB']]))
  const index = useRef<number>(0)

  const [test, setTest] = useState<TestItem>(testList.current[index.current])

  const clickOption = (type: string, q: string) => {
    console.log(q);
    const idx = index.current
    testList.current[idx].result = type
    if (idx === testList.current.length - 1) {
      console.log('end!!', testList.current)
      navigate(isPhaseA ? '/mid-result' : '/result')
    }
    else {
      index.current++;
      setTest(testList.current[index.current])
    }
  }

  return (
    <ScTestPage>
      <TestItemForm test={test} clickOption={clickOption} />
    </ScTestPage>
  )
}

const ScTestPage = styled.div`
  ${container};
`

export default TestPage