import axiosClient from './axiosClient';

const getProducts = async (query) => {
  const { sortType, page, limit } = query;

  const queryLimit = limit === 'all' ? '' : `limit=${limit}`;

  const res = await axiosClient.get(
    `/product?sortType=${sortType}&page=${page}&${queryLimit}`
  );
  return res.data;
};

const getProductById = async (productId) => {
  const res = await axiosClient.get(`/product/${productId}`);
  return res.data;
};

export { getProducts, getProductById };
