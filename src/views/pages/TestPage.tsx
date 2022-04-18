import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import testData from '@/db/testList';
import { arrShuffle } from '@/utils/common';
import s, { container } from '@/styles/mixin';
import useReactRouter from '@/hooks/useReactRouter';
import TestItemForm, { ScTestItemForm } from '@/views/components/test/TestItemForm';
import TestProgressBar from '@/views/components/test/TestProgressBar';
import { useSetRecoilState } from 'recoil';
import { atomResultA, atomResultB } from '@/recoil/main';

const listA = arrShuffle(testData.phaseA);
const listB = arrShuffle(testData.phaseB);

const TestPage: React.FC = () => {
  const { search, navigate } = useReactRouter()
  const isPhaseA = search.phase === 'a'
  const themeKey = isPhaseA ? 'green' : 'yellow'
  
  const testList = isPhaseA ? listA : listB
  const [index, setIndex] = useState<number>(0)
  const [test, setTest] = useState<TestItem>(testList[index])

  const setResultA = useSetRecoilState(atomResultA);
  const setResultB = useSetRecoilState(atomResultB);

  const clickOption = (type: TestAnswer) => {
    testList[index].result = type
    if (index === testList.length - 1) {
      if (isPhaseA) {
        setResultA(testList)
        navigate('/result/mid')
      }
      else {
        setResultB(testList)
        navigate('/result/final')
      }
    }
    else {
      setTest(testList[index+1])
      setIndex(index+1)
    }
  }

  return (
    <ScTestPage>
      <section>
        <TestNum themeKey={themeKey}>
          Question <span className='num'>{String(index+1).padStart(2,'0')}</span> .
        </TestNum>
        <TestItemForm test={test} themeKey={themeKey} clickOption={clickOption} />
        <TestProgressBar length={testList.length} index={index} themeKey={themeKey} />
      </section>
    </ScTestPage>
  )
}

const ScTestPage = styled.div`
  section {
    ${container};
  }
`;

const TestNum = styled.p<{themeKey: string;}>`${s('wf; fs(24); bold;')}
  > span.num {
    ${({ theme, themeKey }) => s(`c(${theme[themeKey][1]});`)}
  }
`

export default TestPage