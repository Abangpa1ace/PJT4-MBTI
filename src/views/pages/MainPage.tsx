import React from 'react'
import styled from 'styled-components';
import { flexCenter, testcss } from '../../styles/func';

const MainPage = () => {
  return (
    <ScMainPage>MainPage</ScMainPage>
  )
}

const ScMainPage = styled.div`
  width: 400px;
  height: 50px;
  ${flexCenter}${testcss}
`;

export default MainPage