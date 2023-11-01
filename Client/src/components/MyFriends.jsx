import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import MyFriendLine from './MyFriendLine';

import styles from '../styles/FindFriends';

const MyFriends = () => {
  const [users, setUsers] = useState([

  ]);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {users.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text variant="displaySmall">No friends yet</Text>
        </View>
      ) : (
        <ScrollView style={styles.usersContainer}>
          {users.map((user) => (
            <MyFriendLine user={user} />
          ))}
          <View style={styles.placeHolder}></View>
        </ScrollView>
      )}
    </View>
  );
};

export default MyFriends;
