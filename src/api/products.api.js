import api from './axios';

export const productsList = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (data) => {
  return await api.post('/products', data);
};
