// App.tsx
import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Header } from './src/components/Header'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
// import LoginScreen from "./src/screens/LoginScreen";
import StorybookUIRoot from './.storybook';


const queryClient = new QueryClient();


const App = () => {
    return (
        <PaperProvider>
            <QueryClientProvider client={queryClient}>
                <Header title="SpaceCraft" />
                {/* <LoginScreen /> */}
                <StarshipFeedScreen />
            </QueryClientProvider>
        </PaperProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;

// Should we show storybook instead of our app?
// const SHOW_STORYBOOK = false;
// const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
// // eslint-disable-next-line import/no-default-export
// export default UI;