import api from './axios';

const loginUser = async (data) => {
  try {
    const res = api.post('/auth/login', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (data) => {
  try {
    const res = api.post('/auth/register', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, registerUser };
