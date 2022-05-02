import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useReactRouter from '@/hooks/useReactRouter';
import s, { media } from '@/styles'
import Loader from '@/views/components/result/Loader';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atomResultA, resultCodeA } from '@/recoil/main';
import BaseButton, { ScBaseButton } from '@/views/components/common/BaseButton';
import CharSprite from '@/views/components/result/CharSprite';
import TestResultForm from '@/views/components/test/TestResultForm';

const MidResultPage: React.FC = () => {
  const { navigate } = useReactRouter()
  const [loading, setLoading] = useState<boolean>(true);
  const resetResultA = useResetRecoilState(atomResultA)
  const resultCode = useRecoilValue<TestCodes>(resultCodeA)


  useEffect(() => {
    if (!resultCode) navigate('/test?phase=a')
    const loader = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => clearTimeout(loader)
  }, [])

  const goBackHome = () => {
    resetResultA();
    navigate('/');
  }

  return (
    <ScMidResultPage>
      <section>
        {
          loading ? <Loader /> :
          <>
            <div className="result-header">
              <CharSprite phase="a" code={resultCode} />
              <h3>학창시절의 나는? <span>{resultCode}!</span></h3>
            </div>
            <TestResultForm code={resultCode} phase="a" />
            <div className="btn-wrapper">
              <BaseButton color="purple" onClick={() => navigate('/test?phase=b')}>다음 테스트 하러 가기</BaseButton>
              <BaseButton color="gray" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
            </div>
          </>
        }
      </section>
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  .result-header { ${s('tac')};
    h3 {
      ${s('fs(28);')}
      span { ${({ theme }) => s(`fs(28); c(${theme.purple[2]})`)} }
    }
  }

  .btn-wrapper { ${s('tac')}; 
    ${ScBaseButton} ${s('mt(10)')}
  };

  @media ${media.ml} { 
    .result-header {
      h3 ${s('fs(24);')}
    }
  }
`;

export default MidResultPage