import s from '@/styles/mixin'
import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <ScLoader>
      <p>로딩중입니다...</p>
    </ScLoader>
  )
}

const ScLoader = styled.div`
  ${s('fix; alt(0,0); flex-center; wh(100%); bgc(rgba(0,0,0,0.3)); tac;')};
  p ${s('wf;')}
`

export default Loader