import axios from 'axios';
import {API_BASE_URL} from '../../Constants/api';

export const GetUsersAsync = async () => {
  try {
    let response = await axios.get(API_BASE_URL + '/users');
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      data: null,
    };
  }
};
