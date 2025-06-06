import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [listProductCart, setListProductCart] = useState([]);
  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === 'cart') {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetListProductsCart,
    listProductCart
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
