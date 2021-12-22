import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { SignIn } from './Pages/SignIn';

import { main } from './styles/themes/main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
    <GlobalStyle />
    <SignIn />
    </ThemeProvider>
  );
}

export default App;
