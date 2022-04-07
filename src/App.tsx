import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import theme from './styles/theme';
import HomePage from './views/pages/HomePage';
import Routes from '@/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalReset />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}
export default App;