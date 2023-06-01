import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <TextInput
        label="Email"
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        style={styles.input}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
      <Text>Read Terms and conditions.</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
});
