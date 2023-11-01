import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme, TextInput, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

import FindFriendLine from './FindFriendLine';

import styles from '../styles/FindFriends';
import { getUsers } from '../util/api';

const FindFriends = () => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  const theme = useTheme();

  const onSearchClick = async () => {
    const usersData = await getUsers(
      text,
      user.friends,
      user._id,
      'search'
    );
    setUsers(usersData)
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          label="Find friends by nick name"
          placeholder="Search"
          right={
            <TextInput.Icon icon="account-search" onPress={onSearchClick} />
          }
        />
      </View>
      {users.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text variant="displaySmall">Try to search</Text>
        </View>
      ) : (
        <ScrollView style={styles.usersContainer}>
          {users.map((friend) => (
            <FindFriendLine key={friend._id} user={friend} loggedInUser={user}/>
          ))}
          <View style={styles.placeHolder}></View>
        </ScrollView>
      )}
    </View>
  );
};

export default FindFriends;
