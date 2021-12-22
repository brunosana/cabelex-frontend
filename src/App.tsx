import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { main } from './styles/themes/main';
import ISubsidiary from './interfaces/Subsidiary';
import IEmployee from './interfaces/Employee';

import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';

const obj = {
  employeeNumber: 8,
  id: '123',
  name: 'Filial de Tobias Barreto'
} as ISubsidiary;

const emp = {
  id: '123456',
  filial: '123',
  name: 'Bruno'
} as IEmployee;

const App: React.FC = () => {
  return (
    <Router>
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </ThemeProvider>
    </Router>
  );
}

export default App;
