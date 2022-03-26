import React from 'react'
import styled from 'styled-components';
import { container, s } from '@/styles/mixin';
import BaseButton from '@/views/components/BaseButton';

const MainPage = () => {
  return (
    <ScMainPage>
      <section>
        <h2>지금 우리 MBTI는?</h2>
        <div className="image-holder">
          <img src="/src/asset/img/intro.jpeg" alt="intro-difference-img" />
        </div>
        <BaseButton color="purple">테스트 하러 가기</BaseButton>
      </section>
    </ScMainPage>
  )
}

const ScMainPage = styled.div`
  > section {
    ${container};
    ${s(`flex-column;`)}

    h2 { ${s(`fs(36);`)} }

    .image-holder {
      height: 310px;
      margin: 40px 0 60px;
      overflow: hidden;

      img {
        transform: translateY(-60px);
      }
    }
  }
`;

export default MainPage