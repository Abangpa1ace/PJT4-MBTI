import React from 'react'
import styled from 'styled-components';
import s, { container } from '@/styles/mixin';
import BaseButton from '@/views/components/BaseButton';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <ScMainPage>
      <section>
        <h2>지금 우리 MBTI는?</h2>
        <div className="image-holder">
          <img src="/src/asset/img/intro.jpeg" alt="intro-difference-img" />
        </div>
        <Link to='/test?type=a'>
          <BaseButton color="purple">테스트 하러 가기</BaseButton>
        </Link>
      </section>
    </ScMainPage>
  )
}

const ScMainPage = styled.div`
  > section { 
    ${s(`flex-column;`)};
    ${container};

    h2 ${s(`fs(36);`)}

    .image-holder { ${s(`h(310); m(40,0,60); crop;`)}
      img ${s(`t-y(-60px)`)}
    }
  }
`

export default MainPage