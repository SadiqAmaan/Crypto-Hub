import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const getData = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
