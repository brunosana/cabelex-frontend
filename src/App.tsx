import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { CreateSubsidiary } from './Pages/CreateSubsidiary';

import { main } from './styles/themes/main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <CreateSubsidiary />
    </ThemeProvider>
  );
}

export default App;
