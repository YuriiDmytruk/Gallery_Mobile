import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  MD3LightTheme as Default,
  MD3DarkTheme as DefaultDark,
  PaperProvider,
} from 'react-native-paper';

import EnterPage from './src/pages/EnterPage';
import AddImagePage from './src/pages/AddImagePage';
import FindFrendsPage from './src/pages/FindFrendsPage';
import MyGaleryPage from './src/pages/MyGaleryPage';
import MyProfilePage from './src/pages/MyProfilePage';
import PopularGaleryPage from './src/pages/PopularGaleryPage';
import { NavBar } from './src/components/index';

import { get } from './src/util/asyncStorage';

const theme = Default;
const Stack = createNativeStackNavigator();

const App = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const setUser = async () => {
      setAuthor(await get());
    };

    setUser();
  }, []); 

  return (
    <PaperProvider theme={theme}>
      {author === null ? (
        <EnterPage setAuthor={setAuthor} />
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
            <Stack.Screen name="MyProfile" options={{ headerShown: true }} >
              {() => <MyProfilePage setAuthor={setAuthor} />}
            </Stack.Screen>
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
