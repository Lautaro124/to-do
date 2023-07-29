import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error saving data:', error);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('Error retrieving data:', error);
    return null;
  }
};
