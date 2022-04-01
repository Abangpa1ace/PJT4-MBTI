import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BaseButton from '@/views/components/common/BaseButton';
import s, { container } from '@/styles/mixin'

const MidResultPage = () => {
  return (
    <ScMidResultPage>
      <h2>최종 결과입니다!!!</h2>
      <Link to='/'>
          <BaseButton color="purple">처음으로 돌아가기~</BaseButton>
        </Link>
    </ScMidResultPage>
  )
}

const ScMidResultPage = styled.div`
  ${container};
  ${s(`tac;`)}
`

export default MidResultPage