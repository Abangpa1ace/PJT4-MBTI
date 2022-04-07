import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BaseButton, { ScBaseButton } from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s, { container } from '@/styles/mixin'
import Loader from '@/views/components/common/Loader';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { resultCodeA } from '@/recoil/main';
import { resultA } from '@/recoil/main';
import CharSprite from '../components/result/CharSprite';

const MidResultPage: React.FC = () => {
  const { navigate } = useReactRouter()
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('')
  const resetResultA = useResetRecoilState(resultA)
  const resultCode = useRecoilValue<string>(resultCodeA)

  useEffect(() => {
    if (!resultCode) navigate('/test?phase=a')
    const loader = setTimeout(() => {
      setResult(resultCode);
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
      {
        loading ? <Loader /> :
        <>
          <h2>중간 결과입니다.</h2>
          <p>{result}</p>
          <CharSprite phase="a" code={resultCode} />
          <BaseButton color="purple" onClick={() => navigate('/test?phase=b')}>다음 테스트 하러 가기</BaseButton>
          <BaseButton color="gray" onClick={goBackHome}>처음으로 돌아가기</BaseButton>
        </>
      }
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${s(`tac;`)}
  ${container};

  ${ScBaseButton} {
    ${s('mt(20);')}
  }
`

export default MidResultPage