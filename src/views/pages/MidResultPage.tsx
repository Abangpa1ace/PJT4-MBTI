import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s, { container } from '@/styles/mixin'
import Loader from '@/views/components/common/Loader';
import { useRecoilValue } from 'recoil';
import { resultCodeA } from '@/recoil/main';

const MidResultPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('');
  const resultCode = useRecoilValue<string>(resultCodeA)
  const { navigate } = useReactRouter()

  useEffect(() => {
    const loader = setTimeout(() => {
      if (!resultCode) navigate('/test?phase=a')
      setResult(resultCode);
      setLoading(false);
    }, 3000)
    return () => clearTimeout(loader)
  }, [])

  return (
    <ScMidResultPage>
      {
        loading ? <Loader /> :
        <>
          <h2>중간 결과입니다.</h2>
          <p>{result}</p>
          <Link to='/test?phase=b'>
            <BaseButton color="purple">다음 테스트 하러 가기</BaseButton>
          </Link>
        </>
      }
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${s(`tac;`)}
  ${container};
`

export default MidResultPage