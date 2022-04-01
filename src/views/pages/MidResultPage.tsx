import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import s, { container } from '@/styles/mixin'

const MidResultPage = () => {
  return (
    <ScMidResultPage>
      <h2>중간 결과입니다.</h2>
      <Link to='/test?phase=b'>
          <BaseButton color="purple">다음 테스트 하러 가기</BaseButton>
        </Link>
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${container};
  ${s(`tac;`)}
`

export default MidResultPage