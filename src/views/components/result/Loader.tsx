import { showHide } from '@/styles/keyframes'
import s from '@/styles/mixin'
import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <ScLoader>
      <img src="/src/asset/img/loading.gif" />
      <p>
        Loading
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </ScLoader>
  )
}

export const ScLoader = styled.div`
  ${s('tac;')}
  
  img ${s('wh(160); mc;')}

  p { ${s('fs(32);')}
    span {
      animation: ${showHide} 1.5s linear infinite;
      &:nth-of-type(2) {
        animation-delay: .5s;
      }
      &:nth-of-type(3) {
        animation-delay: 1s;
      }
    }  
  }
`

export default Loader