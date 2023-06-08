import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Routes } from "../navigation/Routes";


export const LoginScreen = ({ navigation }) => {
  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (
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
      <TouchableOpacity onPress={navigateToTerms}>
        <Text>Read Terms and conditions.</Text>
      </TouchableOpacity>
    </View>
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
