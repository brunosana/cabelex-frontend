import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { EditEmployee } from './Pages/EditEmployee';

import { main } from './styles/themes/main';
import ISubsidiary from './interfaces/Subsidiary';
import IEmployee from './interfaces/Employee';

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
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <EditEmployee employee={emp} subsidiary={obj} />
    </ThemeProvider>
  );
}

export default App;
