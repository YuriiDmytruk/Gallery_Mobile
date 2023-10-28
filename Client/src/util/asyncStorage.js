import AsyncStorage from '@react-native-async-storage/async-storage';

const set = async (value) => {
  try {
    await AsyncStorage.setItem('USER', value);
  } catch (error) {
    console.log(error);
  }
};

const get = async () => {
  try {
    return await AsyncStorage.getItem('USER');
  } catch (error) {
    console.log(error);
    return null;
  }
};

const remove = async () => {
  try {
    return await AsyncStorage.removeItem('USER');
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { set, get, remove };
