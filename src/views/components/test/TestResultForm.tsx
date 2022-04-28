import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles'

type Props = {
  
}

const TestResultForm: React.FC<Props> = ({  }) => {
  return (
    <ScTestResultForm>
      result
    </ScTestResultForm>
  )
}

const ScTestResultForm = styled.div`
  ${s(`wf; p(10,15); -a(${theme.purple[0]}, 3); br(8);`)}
`

export default TestResultForm