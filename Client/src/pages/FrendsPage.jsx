import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { FindFrends, MyFrends } from '../components/index';

import styles from '../styles/EnterPage';

const FrendsPage = () => {
  const [isFindFrends, setIsFindFrends] = useState(true);
  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsFindFrends(true)}
        >
          <Text style={{ fontSize: 20 }}>Find frends</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setIsFindFrends(false)}
        >
          <Text style={{ fontSize: 20 }}>My frends</Text>
        </Button>
      </View>
      {isFindFrends ? <FindFrends /> : <MyFrends/>}
    </ScrollView>
  );
};

export default FrendsPage;
