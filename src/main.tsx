import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Loader from './views/components/result/Loader';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import theme from './styles/theme';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <GlobalReset />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);