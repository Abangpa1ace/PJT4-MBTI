import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Loader from './views/components/result/Loader';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import { theme } from './styles';
import './index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <GlobalReset />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);