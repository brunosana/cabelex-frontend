import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { Home } from './Pages/Home';

import { main } from './styles/themes/main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <Home />
    </ThemeProvider>
  );
}

export default App;
