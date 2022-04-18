import React from 'react'
import styled from 'styled-components';
import s, { container } from '@/styles/mixin';
import BaseButton from '@/views/components/common/BaseButton';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <ScHomePage>
      <section>
        <h2>지금 우리 MBTI는?</h2>
        <div>
          <div className="image-holder">
            <img src="/src/asset/img/intro.jpeg" alt="intro-difference-img" />
          </div>
          <h3>
            <span className="green">파릇파릇</span> 했던 그 시절의 나, <br />
            입사하더니 대체 <span className="yellow">무슨 일이?!</span>
          </h3>
        </div>
        <Link to='/test?phase=a' className='button'>
          <BaseButton color="purple">테스트 하러 가기</BaseButton>
        </Link>
      </section>
    </ScHomePage>
  )
}

const ScHomePage = styled.div`
  > section { 
    ${container};

    h3 { ${s('fs(24,28); c(#7c7c7c); tac;')}
      span.green { ${({ theme }) => `color: ${theme.green[1]}`} }
      span.yellow { ${({ theme }) => `color: ${theme.yellow[1]}`} }
    }
    h2 ${s(`fs(40);`)}

    .button ${s('m(40,0);')}

    .image-holder { ${s(`w(100%); crop;`)}
      img ${s(`mb(-12%); t-y(-12%);`)}
    }
  }
`

export default HomePage