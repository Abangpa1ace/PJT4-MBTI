import React from 'react';
import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';
import { atomToast } from '@/recoil/main';
import styled, { keyframes } from 'styled-components';
import s from '@/styles'

const ToastPortal: React.FC= () => {
  const toastList = useRecoilValue(atomToast);
  const toastRoot = document.getElementById('root-toast')!;
  return ReactDOM.createPortal(
    <ToastContainer>
      {toastList.map(toast => <li key={toast.time} className={toast.error ? 'error' : ''}>{toast.message}</li>)}
    </ToastContainer>
    , toastRoot);
};
const ani = keyframes`
  0%, 100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }
  15%, 85% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
  }
  100% {
    display: hidden;
  }
`;

const ToastContainer = styled.ul`
  ${s('fix; alt(0,0); wf;')};

  li {
    ${s('flex-center; h(42); bgc(#c9fffa); fs(20);')}
    animation: ${ani} 2s ease;
    &.error ${s('bgc(#ffdee3);')}
  }
`;



export default ToastPortal;