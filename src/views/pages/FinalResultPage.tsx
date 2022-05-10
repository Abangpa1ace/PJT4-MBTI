import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s from '@/styles'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atomResultA, atomResultB, resultCodeA, resultCodeB } from '@/recoil/main';
import Loader from '@/views/components/result/Loader';
import CharSprite, { ScCharSprite } from '@/views/components/result/CharSprite';
import TestResultForm from '@/views/components/test/TestResultForm';

type FocusType = {
  code: TestCodes;
  phase: 'a' | 'b';
}

const FinalResultPage: React.FC = () => {
  const { navigate } = useReactRouter()
  const [loading, setLoading] = useState<boolean>(true);

  const resetResultA = useResetRecoilState(atomResultA);
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
    resetResultA();
    resetResultB();
    navigate('/')
  }

  return (
    <ScFinalResultPage focusPhase={focusCode.phase}>
      <section>
        {
          loading ? <Loader /> :
          <>
            <div className="result-header">
              <CharSprite className={focusCode.phase === 'a' ? 'focus' : ''} phase="a" code={preResultCode} onClick={() => toggleFocusCode({ phase: 'a', code: preResultCode })}/>
              <CharSprite className={focusCode.phase === 'b' ? 'focus' : ''} phase="b" code={resultCode} onClick={() => toggleFocusCode({ phase: 'b', code: resultCode })} />
              <h2>
                {focusCode.phase === 'a' ? '친한 사람들에게 나는? ' : '회사 사람들에게 나는? '}
                <span>{focusCode.code}</span>
              </h2>
            </div>
            <TestResultForm {...focusCode} />
            <BaseButton color="purple" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
          </>
        }
      </section>
    </ScFinalResultPage>
  )
}

const ScFinalResultPage = styled.div<{focusPhase: 'a' | 'b'}>`
  .result-header { ${s('tac')};
    h2 {
      ${s('mt(20); fs(24);')}
      span { ${({ theme }) => s(`fs(28); c(${theme.purple[1]})`)} }
    }
    > ${ScCharSprite} {
      ${s('pointer;')}
      &.focus {
        ${s('br(10);')}
        box-shadow: 0 0 20px #f4d1ff inset, 0 0 30px #da5cff;
      }
      &:nth-of-type(1) { margin-right: 20px; }
    }
  }
`

export default FinalResultPage