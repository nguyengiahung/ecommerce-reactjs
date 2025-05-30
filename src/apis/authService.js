import axios from 'axios';
import axiosClient from './axiosClient';

const register = async (body) => {
  const res = await axiosClient.post('/register', body);
  return res;
};

const signIn = async (body) => {
  return await axiosClient.post('/login', body);
};

const getInfo = async () => {
  return await axiosClient.get(
    '/user/info/f6fb1eae-10d5-4fb6-ae7c-74c339374e60'
  );
};

export { register, signIn, getInfo };
