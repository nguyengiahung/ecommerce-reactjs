import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WistList() {
  const { container, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<CiHeart />} title={'WISHLIST'} />
        <ItemProduct />
      </div>
        <div className={boxBtn}>
          <Button content={'VIEW WISHLIST'} />
          <Button content={'ADD ALL TO CART'} isPrimary={false} />
        </div>
    </div>
  );
}

export default WistList;
