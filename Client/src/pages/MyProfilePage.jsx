import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const MyProfilePage = () => {
    const theme = useTheme();
  return (
    <View>
      <Text style={{ backgroundColor: theme.colors.primary, color: theme.colors.onPrimary}}>
                MyProfilePage
            </Text>
    </View>
  );
};

export default MyProfilePage;
