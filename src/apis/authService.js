import axios from 'axios';
import axiosClient from './axiosClient';

const register = async (body) => {
  const res = await axiosClient.post('/register', body);
  return res;
};

const signIn = async (body) => {
  return await axiosClient.post('/login', body);
};

const getInfo = async (userId) => {
  return await axiosClient.get(`/user/info/${userId}`);
};

export { register, signIn, getInfo };
