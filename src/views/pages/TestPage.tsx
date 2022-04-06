import React, { useState, useRef } from 'react'
import qs from 'qs';
import styled from 'styled-components'
import testData from '@/db/testList';
import { arrShuffle } from '@/utils/common';
import s, { container } from '@/styles/mixin';
import useReactRouter from '@/hooks/useReactRouter';
import TestItemForm, { ScTestItemForm } from '@/views/components/test/TestItemForm';
import TestProgressBar from '@/views/components/test/TestProgressBar';
import { useSetRecoilState } from 'recoil';
import { resultA, resultB } from '@/recoil/main';
import { setStorage } from '@/utils/storage';

const TestPage: React.FC = () => {
  const { search, navigate } = useReactRouter()
  const { phase } = qs.parse(search, { ignoreQueryPrefix: true });
  const isPhaseA = phase === 'a'
  const themeKey = isPhaseA ? 'green' : 'yellow'
  
  const testList = useRef<TestResultList>(arrShuffle([...testData[isPhaseA ? 'phaseA' : 'phaseB']]))
  const [index, setIndex] = useState<number>(0)
  const [test, setTest] = useState<TestItem>(testList.current[index])

  const setResultA = useSetRecoilState(resultA);
  const setResultB = useSetRecoilState(resultB);

  const clickOption = (type: Results) => {
    testList.current[index].result = type
    if (index === testList.current.length - 1) {
      if (isPhaseA) {
        setResultA(testList.current)
        setStorage('resultA', testList.current, false)
        navigate('/mid-result')
      }
      else {
        setResultB(testList.current)
        setStorage('resultB', testList.current, false)
        navigate('/result')
      }
    }
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