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
    const response = await AsyncStorage.getItem('USER');
    console.log(response)
    return response;
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
