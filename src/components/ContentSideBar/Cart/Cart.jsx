import React from 'react';
import styles from './styles.module.scss';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';

function Cart() {
  const { container, boxContent, boxBtn,boxPrice } = styles;

  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<CiShoppingCart />} title={'CART'} />
        <ItemProduct />
      </div>
      <div>
        <div className={boxPrice}>
          <p>SUBTOTAL:</p>
          <p>$10.8768</p>
        </div>
        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
