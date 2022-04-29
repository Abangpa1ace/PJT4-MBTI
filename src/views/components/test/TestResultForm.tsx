import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles'
import getTestResult from '@/db/testResult';
import CharSprite from '@/views/components/result/CharSprite';

type Props = {
  phase: 'a' | 'b'
  code: TestCodes
}

const TestResultForm: React.FC<Props> = ({ phase, code }) => {
  const { explanations, careers, recommends, best, worst } = getTestResult('ENFJ' || code);

  return (
    <ScTestResultForm>
      {explanations.map(explanation => <p className="explanation">{explanation}</p>)}
      <h3 className="title careers-title">[어울리는 직종]</h3>
      {careers.map(career => <p className="career">{career}</p>)}
      <h3 className="title recommends-title">[추천직업]</h3>
      <p className="recommends">{recommends}</p>
      <h3 className="title match-title">[나와의 MBTI 궁합]</h3>
      <ul className="match-list">
        <li>
          <CharSprite phase={phase} code={best} />
          <p>이 사람은 찐친각!</p>
        </li>
        <li>
          <CharSprite phase={phase} code={worst} />
          <p>이 사람은 손절각~</p>
        </li>
      </ul>
    </ScTestResultForm>
  )
}

const ScTestResultForm = styled.div` ${s(`wf;`)}
  h3.title ${s(`pt(24); m(24,0,14); c(${theme.purple[2]}); -t(${theme.purple[0]}); fs(22);`)}
  > p { ${s('rel; pl(12); mb(10); fs(20,26); ls(-0.5); c(#333);')}
    &::after {
      content: '';
      ${s(`abs; alt(0,13); wh(5); bgc(${theme.purple[2]}); br(2);`)}
    }
  }
  .match-list { ${s('flex-center; mt(24);')}
    li { ${s('wf; tac;')}} 
      p ${s('c(#333);')}
    }
  }
`

export default TestResultForm