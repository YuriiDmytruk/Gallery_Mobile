import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import MyFrendLine from './MyFrendLine';

import styles from '../styles/FindFrends';

const MyFrends = () => {
  const [users, setUsers] = useState([

  ]);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {users.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text variant="displaySmall">No frends yet</Text>
        </View>
      ) : (
        <ScrollView style={styles.usersContainer}>
          {users.map((user) => (
            <MyFrendLine user={user} />
          ))}
          <View style={styles.placeHolder}></View>
        </ScrollView>
      )}
    </View>
  );
};

export default MyFrends;
