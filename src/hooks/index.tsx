import React from 'react';

import { AuthProvider } from './auth';
import { MockProvider } from './mock';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <MockProvider>
        {children}
    </MockProvider>
  </AuthProvider>
);

export { AppProvider };