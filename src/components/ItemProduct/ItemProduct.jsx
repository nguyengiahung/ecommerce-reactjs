import React from 'react';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
function ItemProduct({ src, name, sku, price, size,quantity }) {
  const { container, boxContent, btnClose } = styles;
  return (
    <div className={container}>
      <img src={src} alt='' />
      <div className={boxContent}>
        <div>{name}</div>
        <div>Size: {size}</div>
        <div>{quantity} x ${price}</div>
        <div>SKU: {sku}</div>
      </div>
      <div className={btnClose}>
        <IoIosClose />
      </div>
    </div>
  );
}

export default ItemProduct;
