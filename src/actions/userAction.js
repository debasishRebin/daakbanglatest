import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/UserConstants';
import axios from 'axios';
import {BASE_PROD_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const {data} = await axios.post(`${BASE_PROD_URL}/login`, {
      Email: email,
      Password: password,
    });

    const jsonUserData = JSON.stringify(data);
    await AsyncStorage.setItem('user_id', jsonUserData);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};
