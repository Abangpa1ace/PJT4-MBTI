import React, { useState, useRef } from 'react'
import qs from 'qs';
import styled from 'styled-components'
import testData from '@/data/testList';
import { arrShuffle } from '@/utils';
import s, { container } from '@/styles/mixin';
import useReactRouter from '@/hooks/useReactRouter';
import TestItemForm, { ScTestItemForm } from '@/views/components/test/TestItemForm';
import TestProgressBar from '@/views/components/test/TestProgressBar';

const TestPage: React.FC = () => {
  const { search, navigate } = useReactRouter()
  const { phase } = qs.parse(search, { ignoreQueryPrefix: true });
  const isPhaseA = phase === 'a'
  const themeKey = isPhaseA ? 'green' : 'yellow'
  
  const testList = useRef<TestResultList>(arrShuffle([...testData[isPhaseA ? 'phaseA' : 'phaseB']]))
  const [index, setIndex] = useState<number>(0)
  const [test, setTest] = useState<TestItem>(testList.current[index])

  const clickOption = (type: string) => {
    testList.current[index].result = type
    if (index === testList.current.length - 1) navigate(isPhaseA ? '/mid-result' : '/result')
    else {
      setIndex(index+1)
      setTest(testList.current[index])
    }
  }

  return (
    <ScTestPage>
      <TestNum themeKey={themeKey}>
        Question <span className='num'>{String(index+1).padStart(2,'0')}</span> .
      </TestNum>
      <TestItemForm test={test} themeKey={themeKey} clickOption={clickOption} />
      <TestProgressBar length={testList.current.length} index={index} themeKey={themeKey} />
    </ScTestPage>
  )
}

const ScTestPage = styled.div`
  ${container};

  ${ScTestItemForm} ${s('mt(20)')}
`;

const TestNum = styled.p<{themeKey: string;}>`${s('fs(24); bold;')}
  > span.num {
    ${({ theme, themeKey }) => s(`c(${theme[themeKey][1]});`)}
  }
`

export default TestPage