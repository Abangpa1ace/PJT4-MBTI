import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s from '@/styles'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atomResultB, resultCodeA, resultCodeB } from '@/recoil/main';
import Loader from '@/views/components/result/Loader';
import CharSprite from '@/views/components/result/CharSprite';
import TestResultForm from '@/views/components/test/TestResultForm';

type FocusType = {
  code: TestCodes;
  phase: 'a' | 'b';
}

const FinalResultPage: React.FC = () => {
  const { navigate } = useReactRouter()
  const [loading, setLoading] = useState<boolean>(true);

  const resetResultB = useResetRecoilState(atomResultB)
  const preResultCode = useRecoilValue<TestCodes>(resultCodeA)
  const resultCode = useRecoilValue<TestCodes>(resultCodeB)
  const [focusCode, setFocusCode] = useState<FocusType>({
    phase: 'b',
    code: resultCode,
  });

  useEffect(() => {
    if (!resultCode) navigate('/result/mid')
    const loader = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => clearTimeout(loader)
  })

  const toggleFocusCode = (focus: FocusType) => {
    setFocusCode(focus)
  }

  const goBackHome = () => {
    resetResultB();
    navigate('/')
  }

  return (
    <ScFinalResultPage>
      <section>
        {
          loading ? <Loader /> :
          <>
            <div className="result-header">
              <CharSprite phase="a" code={preResultCode} onClick={() => toggleFocusCode({ phase: 'a', code: preResultCode })}/>
              <CharSprite phase="b" code={resultCode} onClick={() => toggleFocusCode({ phase: 'b', code: resultCode })} />
              <h2>최종 결과입니다!!! {focusCode.code}</h2>
            </div>
            <TestResultForm {...focusCode} />
            <BaseButton color="purple" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
          </>
        }
      </section>
    </ScFinalResultPage>
  )
}

const ScFinalResultPage = styled.div`
  .result-header { ${s('tac')};
    h3 {
      ${s('fs(28);')}
      span { ${({ theme }) => s(`fs(28); c(${theme.purple[2]})`)} }
    }
  }
`

export default FinalResultPage