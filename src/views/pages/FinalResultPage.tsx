import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s, { container } from '@/styles/mixin'
import Loader from '@/views/components/common/Loader';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atomResultB, resultCodeB } from '@/recoil/main';
import CharSprite from '../components/result/CharSprite';

const FinalResultPage: React.FC = () => {
  const { navigate } = useReactRouter()
  const [loading, setLoading] = useState<boolean>(true);
  const resetResultB = useResetRecoilState(atomResultB)
  const resultCode = useRecoilValue<TestCodes>(resultCodeB)

  useEffect(() => {
    if (!resultCode) navigate('/result/mid')
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000)
    return () => clearTimeout(loader)
  })

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
            <CharSprite phase="b" code={resultCode} />
            <h2>최종 결과입니다!!!</h2>
            <BaseButton color="purple" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
          </>
        }
      </section>
    </ScFinalResultPage>
  )
}

const ScFinalResultPage = styled.div`
  > section {
    ${container};
  }
`

export default FinalResultPage