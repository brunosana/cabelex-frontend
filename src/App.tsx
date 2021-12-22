import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { EditSubsidiary } from './Pages/EditSubsidiary';

import { main } from './styles/themes/main';
import ISubsidiary from './interfaces/Subsidiary';

const obj = {
  employeeNumber: 8,
  id: '123',
  name: 'Filial de Tobias Barreto'
} as ISubsidiary;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <EditSubsidiary subsidiary={obj} />
    </ThemeProvider>
  );
}

export default App;
