import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

import MyFriendLine from './MyFriendLine';

import styles from '../styles/FindFriends';
import { getUsers } from '../util/api';

const MyFriends = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const theme = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await getUsers(
          '',
          user.friends,
          user._id,
          'getFriends'
        );
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {users.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text variant="displaySmall">No friends yet</Text>
        </View>
      ) : (
        <ScrollView style={styles.usersContainer}>
          {users.map((friend) => (
            <MyFriendLine key={friend._id} user={friend} loggedInUser={user} />
          ))}
          <View style={styles.placeHolder}></View>
        </ScrollView>
      )}
    </View>
  );
};

export default MyFriends;
