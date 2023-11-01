import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Text, Button } from 'react-native-paper';

import styles from '../styles/FindFriendLine';

const FindFriendLine = ({ user }) => {
  const theme = useTheme();

  const onAddClick = () => {

  }

  const onGaleryClick = () => {

  }

  return (
    <View style={styles.userContainer}>
      <View>
        <Text variant="headlineSmall">{user}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="elevated" onPress={onAddClick}>
          <Text variant="titleMedium">Add to Friends</Text>
        </Button>
        <Button mode="elevated" onPress={onGaleryClick}>
          <Text variant="titleMedium">Galery</Text>
        </Button>
      </View>
    </View>
  );
};

export default FindFriendLine;
