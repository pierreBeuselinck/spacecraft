
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from "../screens/LoginScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { TermsScreen } from "../screens/TermsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Default">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Starships" component={StarshipFeedScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;