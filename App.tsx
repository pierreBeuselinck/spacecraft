// App.tsx
import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Header } from './src/components/Header'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import LoginScreen from './src/screens/LoginScreen';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider>
                <Header title="SpaceCraft" />
                <LoginScreen />
            </PaperProvider>
        </QueryClientProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;