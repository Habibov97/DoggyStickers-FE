import api from './axios';

const loginUser = async (params) => {
  const res = await api.post('/auth/login', params);
  return res.data;
};

const registerUser = async (params) => {
  const res = await api.post('/auth/register', params);
  return res.data;
};

const currentUser = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};

export { loginUser, registerUser, currentUser };
