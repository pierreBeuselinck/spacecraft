// App.tsx
import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Header } from './src/components/Header'

import LoginScreen from './src/screens/LoginScreen';

const App = () => {
    return (
        <PaperProvider>
            <Header title="SpaceCraft" />
            <LoginScreen />
        </PaperProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;