import api from './axios';

const loginUser = async (params) => {
  try {
    const res = await api.post('/auth/login', params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (params) => {
  try {
    const res = await api.post('/auth/register', params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, registerUser };
