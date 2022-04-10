import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import s, { container } from '@/styles/mixin'
import Loader from '@/views/components/common/Loader';
import { useRecoilValue } from 'recoil';
import { resultCodeB } from '@/recoil/main';

const FinalResultPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('');
  const resultCode = useRecoilValue<string>(resultCodeB)
  const { navigate } = useReactRouter()

  useEffect(() => {
    if (!resultCode) navigate('/result/mid')
    const loader = setTimeout(() => {
      setResult(resultCode);
      setLoading(false);
    }, 3000)
    return () => clearTimeout(loader)
  })

  return (
    <ScFinalResultPage>
      {
        loading ? <Loader /> :
        <>
          <h2>최종 결과입니다!!!</h2>
          <Link to='/'>
            <BaseButton color="purple">처음으로 돌아가기~</BaseButton>
          </Link>
        </>
      }
    </ScFinalResultPage>
  )
}

const ScFinalResultPage = styled.div`
  ${container};
  ${s(`tac;`)}
`

export default FinalResultPage