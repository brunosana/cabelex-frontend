import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { main } from './styles/themes/main';

import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';
import { MockProvider } from './hooks/mock';


const App: React.FC = () => {
  return (
    <Router>
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <MockProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </MockProvider>
    </ThemeProvider>
    </Router>
  );
}

export default App;
