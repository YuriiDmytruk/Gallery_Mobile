import React from 'react';
import { View } from 'react-native';
import { useTheme, Button, Text, Divider, Switch  } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteUser } from '../redux/ducks/users';
import styles from '../styles/MyProfilePage';

const MyProfilePage = () => {
  const theme = useTheme();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOutClick = async () => dispatch(deleteUser());

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text variant="headlineMedium" style={styles.nickName}>{user.nickName}</Text>
        <Text variant="headlineMedium" style={styles.text}>Email: </Text>
        <Text variant="headlineMedium" style={styles.text}>{user.email}</Text>
        <Divider />
      </View>
      <Button style={styles.button} mode="contained" onPress={onLogOutClick}>
        <Text style={{ color: theme.colors.onPrimary, fontSize: 20 }}>Log out</Text>
      </Button>
    </View>
  );
};

export default MyProfilePage;
