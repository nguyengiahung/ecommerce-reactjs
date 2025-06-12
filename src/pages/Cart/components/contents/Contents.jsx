import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import CartTable from '@/pages/Cart/components/contents/CartTable';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import { SidebarContext } from '@/contexts/SidebarProvider';
import {
  addProductToCart,
  deleteItemCart,
  deleteAll
} from '@/apis/cartService';
import { ToastContext } from '@/contexts/ToastProvider';
import { CiShoppingCart } from 'react-icons/ci';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Contents() {
  const {
    containerContents,
    containerEmpty,
    titleEmpty,
    paraEmpty,
    iconEmpty,
    boxEmpty
  } = styles;
  const {
    listProductCart,
    handleGetListProductsCart,
    isLoading,
    setIsLoading,
    userId
  } = useContext(SidebarContext);
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  const handleChangeQuantity = (data) => {
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        console.log(res);
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleDeleteItemCart = (data) => {
    confirm('Do you want to delete this product?');
    setIsLoading(true);
    deleteItemCart(data)
      .then((res) => {
        console.log(res);
        toast.success('Delete product successfully');
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleDeleteAll = () => {
    setIsLoading(true);
    deleteAll({ userId })
      .then((res) => {
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={
        listProductCart.length > 0 ? containerContents : containerEmpty
      }
    >
      {listProductCart.length > 0 ? (
        <>
          <CartTable
            listProductCart={listProductCart}
            getChangeData={handleChangeQuantity}
            isLoading={isLoading}
            getDataDelete={handleDeleteItemCart}
            deleteAllData={handleDeleteAll}
          />
          <CartSummary />
        </>
      ) : (
        <div className={boxEmpty}>
          <CiShoppingCart className={iconEmpty} />
          <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
          <div className={paraEmpty}>
            We invite you to get acquainted with an assortment of our shop.
            Surely you can find something for yourself!
          </div>
          <Button
            content={'RETURN TO SHOP'}
            onClick={() => navigate('/shop')}
          />
        </div>
      )}
    </div>
  );
}

export default Contents;
