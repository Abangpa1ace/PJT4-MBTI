import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import Loader from '@/views/components/common/Loader';
import s, { container } from '@/styles/mixin'

const MidResultPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000)
    return () => clearTimeout(loader)
  })

  return (
    <ScMidResultPage>
      {
        loading ? <Loader /> :
        <>
          <h2>최종 결과입니다!!!</h2>
          <Link to='/'>
            <BaseButton color="purple">처음으로 돌아가기~</BaseButton>
          </Link>
        </>
      }
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${container};
  ${s(`tac;`)}
`

export default MidResultPage