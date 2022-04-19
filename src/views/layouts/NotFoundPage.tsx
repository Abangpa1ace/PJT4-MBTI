import { Link } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components'
import s, { container } from '@/styles'
import BaseButton from '@/views/components/common/BaseButton'

const NotFoundPage = () => {
  return (
    <ScNotFoundPage>
      <section>
        <p>나는 어디? 여긴 누구?</p>
        <Link to="/">
          <BaseButton>홈으로 돌아가기</BaseButton>
        </Link>
      </section>
    </ScNotFoundPage>
  )
}

const ScNotFoundPage = styled.div`
  > section {
    ${container};
    ${s('flex-jc(center); gap(20);')}
  }
`

export default NotFoundPage