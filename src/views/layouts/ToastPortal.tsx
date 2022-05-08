import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import s from '@/styles'

type Props = {
  msgList: string[]
}

const ToastPortal: React.FC<Props> = ({ msgList }) => {
  return ReactDOM.createPortal(
    <ToastContainer>
      {msgList.map(msg => <li key={msg}>{msg}</li>)}
    </ToastContainer>
    , document.getElementById('toast'));
};

const ToastContainer = styled.ul`
  ${s('fix; alt(0,0); wf;')};

  li {
    ${s('flex-center; h(30); bgc(yellowgreen);')}
  }
`;

export default ToastPortal;