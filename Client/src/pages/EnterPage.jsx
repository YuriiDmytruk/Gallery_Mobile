import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { LogIn, Register } from '../components/index';

import styles from '../styles/EnterPage';

const EnterPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsLoggingIn(true)}
        >
          <Text style={{ fontSize: 20 }}>Log In</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsLoggingIn(false)}
        >
          <Text style={{ fontSize: 20 }}>Register</Text>
        </Button>
      </View>
      {isLoggingIn ? <LogIn /> : <Register setIsLoggingIn={setIsLoggingIn}/>}
    </ScrollView>
  );
};

export default EnterPage;
