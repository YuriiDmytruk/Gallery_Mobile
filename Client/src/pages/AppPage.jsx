import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import EnterPage from './EnterPage';
import AddImagePage from './AddImagePage';
import FriendsPage from './FriendsPage';
import GaleryPage from './GaleryPage';
import MyProfilePage from './MyProfilePage';
import { NavBar } from '../components/index';

const theme = MD3LightTheme;
const Stack = createNativeStackNavigator();

const App = () => {
  const userId = useSelector((state) => state.user._id);

  return (
    <PaperProvider theme={theme}>
      {userId === '' ? (
        <EnterPage />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="AddImage" component={AddImagePage} />
            <Stack.Screen name="FriendsPage" component={FriendsPage} />
            <Stack.Screen
              name="MyGalery"
              component={GaleryPage}
              initialParams={{ userId: userId, amount: '' }}
            />
            <Stack.Screen name="MyProfile" component={MyProfilePage} />
            <Stack.Screen
              name="PopularGalery"
              component={GaleryPage}
              initialParams={{ userId: '', amount: '20' }}
            />
          </Stack.Navigator>
          <NavBar />
        </NavigationContainer>
      )}

      <StatusBar hidden />
    </PaperProvider>
  );
};

export default App;
