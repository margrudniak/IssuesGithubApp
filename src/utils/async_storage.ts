import AsyncStorage from '@react-native-community/async-storage';

export const saveComments = async (element: Object) => {
  let data = await AsyncStorage.getItem('COMMENTS');
  if (data !== null) {
    let arr = JSON.parse(data);
    arr.push(element);
    await AsyncStorage.setItem('COMMENTS', JSON.stringify(arr));
  } else await AsyncStorage.setItem('COMMENTS', JSON.stringify([element]));
};

export const getComments = async () => await AsyncStorage.getItem('COMMENTS');
