import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme, Button, TextInput } from 'react-native-paper';

import styles from '../styles/Register';
import { postUser } from '../util/api';

const Register = ({ setIsLoggingIn }) => {
  const [user, setUser] = useState({
    email: 'tom@gmail.com',
    password: '1111',
    nickName: 'Tom',
  });
  const [showPassword, setShowPassword] = useState(true);

  const theme = useTheme();

  const onRegisterClick = async () => {
    const response = await postUser(user);
    if (response.statusCode === 200) {
      setIsLoggingIn(true);
    } else {
      console.log(response.errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: theme.colors.primary }}>
        Register
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Nick name"
          mode="outlined"
          value={user.nickName}
          right={
            <TextInput.Icon
              icon="close-circle-outline"
              onPress={() => setUser({ ...user, nickName: '' })}
            />
          }
        />
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value={user.email}
          right={
            <TextInput.Icon
              icon="close-circle-outline"
              onPress={() => setUser({ ...user, email: '' })}
            />
          }
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={user.password}
          mode="outlined"
          secureTextEntry={showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
      </View>

      <Button mode="contained" style={styles.button} onPress={onRegisterClick}>
        <Text style={{ fontSize: 20 }}>Register</Text>
      </Button>
    </View>
  );
};

export default Register;
