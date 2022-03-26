import React from 'react'
import styled from 'styled-components';
import { container, flexColumn, test } from '@/styles/mixin';
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
        <Test>
          <div></div>
          <div></div>
          <div></div>
        </Test>
      </section>
    </ScMainPage>
  )
}

const Test = styled.div`
  margin-top: 60px;
  ${test()}
  
  > * {
    width: 40px;
    height: 40px;
    border: 1px solid blue;
    background: red;
  }
`;

const ScMainPage = styled.div`
  > section {
    ${container};
    ${flexColumn};

    h2 {
      font-size: 36px;
    }

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