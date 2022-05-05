import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import testData from '@/db/testList';
import { arrShuffle } from '@/utils/common';
import s, { theme, media } from '@/styles';
import useReactRouter from '@/hooks/useReactRouter';
import useRouteState from '@/hooks/useRouteState';
import TestItemForm from '@/views/components/test/TestItemForm';
import TestProgressBar from '@/views/components/test/TestProgressBar';
import { useSetRecoilState } from 'recoil';
import { atomResultA, atomResultB } from '@/recoil/main';

const listA = arrShuffle(testData.phaseA);
const listB = arrShuffle(testData.phaseB);

const TestPage: React.FC = () => {
  const { query, navigate } = useReactRouter()
  
  console.log('created')
  useEffect(() => {
    console.log('mounted')
    if (!query.phase || !['a','b'].includes(query.phase)) navigate('/')
  }, [])

  const isPhaseA = query.phase === 'a'
  const themeKey = isPhaseA ? 'green' : 'yellow'
  
  const testList = isPhaseA ? listA : listB
  const [index, setIndex] = useState<number>(0)
  const [test, setTest] = useState<TestItem>(testList[index])

  const setResult = useSetRecoilState(isPhaseA ? atomResultA : atomResultB);

  const clickOption = (type: TestAnswer) => {
    testList[index].result = type
    
    if (index === testList.length - 1) {
      setResult(testList)
      navigate(isPhaseA ? '/result/mid' : '/result/final')
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
`;

const TestNum = styled.p<{themeKey: string;}>`${s('wf; c(#595959); fs(24); bold;')}
  > span.num {
    ${({ themeKey }) => s(`c(${theme[themeKey][1]});`)}
  }
  @media ${media.ml} { 
    ${s('fs(20);')}
  }
`

export default TestPage