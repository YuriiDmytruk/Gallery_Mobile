import React from 'react';
import { View, Text } from 'react-native';
import { useTheme, Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { deleteUser } from '../redux/ducks/users';

const MyProfilePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onLogOutClick = async () => dispatch(deleteUser());

  return (
    <View>
      <Button mode="contained" onPress={onLogOutClick}>
        <Text style={{ fontSize: 20 }}>Log out</Text>
      </Button>
    </View>
  );
};

export default MyProfilePage;
