import React from 'react'
import styled from 'styled-components';
import { container } from '@/styles/mixin';
import BaseButton from '@/views/components/BaseButton';

const MainPage = () => {
  return (
    <ScMainPage>
      <section>
        <h1>지금 우리 MBTI는?</h1>
        <BaseButton>테스트 하러 가기</BaseButton>
      </section>
    </ScMainPage>
  )
}

const ScMainPage = styled.div`
  > section {
    ${container};
  }
`;

export default MainPage