import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme, Button, TextInput } from 'react-native-paper';
import { putUser } from '../util/api';
import { set } from '../util/asyncStorage';

import styles from '../styles/LogIn';

const LogIn = ({setAuthor}) => {
  const [user, setUser] = useState({
    email: 'yuriydmytrukr@gmail.com',
    password: '1111',
  });
  const [showPassword, setShowPassword] = useState(true);
  const theme = useTheme();

  const onLogInClick = async () => {
    const user = JSON.stringify((await putUser(user)).value);
    set(user);
    setAuthor(user);
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: theme.colors.primary }}>LogIn</Text>
      <View style={styles.inputContainer}>
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
          onChangeText={(text) => setUser({ ...user, email: text })}
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

      <Button mode="contained" style={styles.button} onPress={onLogInClick}>
        <Text style={{ fontSize: 20 }}>Log In</Text>
      </Button>
    </View>
  );
};

export default LogIn;
