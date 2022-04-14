import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s, { container } from '@/styles/mixin'
import Loader, { ScLoader } from '@/views/components/common/Loader';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atomResultA, resultCodeA } from '@/recoil/main';
import CharSprite from '../components/result/CharSprite';

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
            <CharSprite phase="a" code={resultCode} />
            <h3>학창시절의 나는? <span>{resultCode}!</span></h3>
            <BaseButton color="purple" onClick={() => navigate('/test?phase=b')}>다음 테스트 하러 가기</BaseButton>
            <BaseButton color="gray" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
          </>
        }
      </section>
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${ScLoader} {
    > img { transform: scaleX(-1); }
  }

  > section {
    ${container};

    h3 {
      ${s('fs(28);')}
      span ${({ theme }) => s(`fs(28); c(${theme.purple[2]})`)}
    }
    ${ScLoader} ${s('t-yc;')}
  }
`

export default MidResultPage