import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import styles from '../styles/NavBar';

const ICON_SIZE = 30;
const ADD_ICON_SIZE = 50;

const NavBar = ({ userId }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}
    >
      <View style={styles.containerSmall}>
        <View
          style={{
            ...styles.buttonContainer,
            backgroundColor: theme.colors.onPrimary,
          }}
        >
          <IconButton
            icon="crown-outline"
            iconColor={theme.colors.primary}
            size={ICON_SIZE}
            onPress={() => navigation.navigate('PopularGalery')}
          />
        </View>
        <View
          style={{
            ...styles.buttonContainer,
            ...styles.centerButton,
            backgroundColor: theme.colors.onPrimary,
          }}
        >
          <IconButton
            icon="account-group"
            iconColor={theme.colors.primary}
            size={ICON_SIZE}
            onPress={() => navigation.navigate('FriendsPage')}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.addButton,
          backgroundColor: theme.colors.onPrimary,
          borderColor: theme.colors.primary,
        }}
      >
        <IconButton
          icon="plus-thick"
          iconColor={theme.colors.primary}
          size={ADD_ICON_SIZE}
          onPress={() => navigation.navigate('AddImage')}
        />
      </View>
      <View style={styles.containerSmall}>
        <View
          style={{
            ...styles.buttonContainer,
            ...styles.centerButton,
            backgroundColor: theme.colors.onPrimary,
          }}
        >
          <IconButton
            icon="account"
            iconColor={theme.colors.primary}
            size={ICON_SIZE}
            onPress={() => navigation.navigate('MyProfile')}
          />
        </View>
        <View
          style={{
            ...styles.buttonContainer,
            backgroundColor: theme.colors.onPrimary,
          }}
        >
          <IconButton
            icon="image-multiple-outline"
            iconColor={theme.colors.primary}
            size={ICON_SIZE}
            onPress={() =>
              navigation.navigate('MyGalery')
            }
          />
        </View>
      </View>
    </View>
  );
};

export default NavBar;
