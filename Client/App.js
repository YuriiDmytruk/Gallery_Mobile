import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  MD3LightTheme as Default,
  MD3DarkTheme as DefaultDark,
  PaperProvider,
} from 'react-native-paper';

import AddImagePage from './src/pages/AddImagePage';
import FindFrendsPage from './src/pages/FindFrendsPage';
import MyGaleryPage from './src/pages/MyGaleryPage';
import MyProfilePage from './src/pages/MyProfilePage';
import PopularGaleryPage from './src/pages/PopularGaleryPage';

import { NavBar } from './src/components/index';

const theme = Default;
const Stack = createNativeStackNavigator();

const App = () => (
  <PaperProvider theme={theme}>
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
    <StatusBar hidden />
  </PaperProvider>
);

export default App;
