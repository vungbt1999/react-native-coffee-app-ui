/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Navigation from './components/navigation';
import { AuthProvider } from './hooks/auth/reducer';

function App(): JSX.Element {
  return <AuthProvider>
    <Navigation />
  </AuthProvider>;
}

export default App;
