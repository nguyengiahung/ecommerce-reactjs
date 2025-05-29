import axiosClient from './axiosClient';

const register = async (body) => {
  const res = await axiosClient.post('/register', body);
  return res;
};

export { register };
