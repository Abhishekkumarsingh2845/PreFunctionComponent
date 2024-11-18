import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.206.16.230:5010/api/v1/customer',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error.response ? error.response.data : 'Network Error';
  }
};

export const fetchData = async endpoint => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error.response ? error.response.data : 'Network Error';
  }
};
