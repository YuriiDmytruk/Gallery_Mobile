import React from 'react';
import { View, Text } from 'react-native';
import { useTheme, Button, TextInput } from 'react-native-paper';

import { remove } from '../util/asyncStorage';

const MyProfilePage = ({setAuthor}) => {
  const theme = useTheme();

  const onLogOutClick = async () => {
    await remove();
    setAuthor(null);
  };

  return (
    <View>
      <Button mode="contained" onPress={onLogOutClick}>
        <Text style={{ fontSize: 20 }}>Log out</Text>
      </Button>
    </View>
  );
};

export default MyProfilePage;
