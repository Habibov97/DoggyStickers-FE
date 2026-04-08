import api from './axios';

export const getUsers = async () => {
  const res = await api.get('/users/list');
  return res.data;
};
