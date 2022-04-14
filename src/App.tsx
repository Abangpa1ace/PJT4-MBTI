import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import theme from './styles/theme';
import Routes from '@/router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalReset />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;