import api from './axios';

export const productsList = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (data) => {
  return await api.post('/products', data);
};

export const createProductImage = async (productId, formData) => {
  return await api.post(`/products/${productId}/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
