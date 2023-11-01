import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { FindFriends, MyFriends } from '../components/index';

import styles from '../styles/EnterPage';

const FriendsPage = () => {
  const [isFindFriends, setIsFindFriends] = useState(true);
  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsFindFriends(true)}
        >
          <Text style={{ fontSize: 20 }}>Find friends</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsFindFriends(false)}
        >
          <Text style={{ fontSize: 20 }}>My friends</Text>
        </Button>
      </View>
      {isFindFriends ? <FindFriends /> : <MyFriends/>}
    </ScrollView>
  );
};

export default FriendsPage;
