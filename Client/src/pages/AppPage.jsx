import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  MD3LightTheme as Default,
  MD3DarkTheme as DefaultDark,
  PaperProvider,
} from 'react-native-paper';
import { useSelector } from 'react-redux';

import EnterPage from './EnterPage';
import AddImagePage from './AddImagePage';
import FindFrendsPage from './FindFrendsPage';
import MyGaleryPage from './MyGaleryPage';
import MyProfilePage from './MyProfilePage';
import PopularGaleryPage from './PopularGaleryPage';
import { NavBar } from '../components/index';

const theme = Default;
const Stack = createNativeStackNavigator();

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <PaperProvider theme={theme}>
      {user._id === '' ? (
        <EnterPage />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="AddImage" component={AddImagePage} />
            <Stack.Screen name="FindFrends" component={FindFrendsPage} />
            <Stack.Screen name="MyGalery" component={MyGaleryPage} />
            <Stack.Screen name="MyProfile" component={MyProfilePage} />
            <Stack.Screen name="PopularGalery" component={PopularGaleryPage} />
          </Stack.Navigator>
          <NavBar />
        </NavigationContainer>
      )}

      <StatusBar hidden />
    </PaperProvider>
  );
};

export default App;
