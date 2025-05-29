import React from 'react';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
function ItemProduct() {
  const { container, boxContent, btnClose } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min-285x340.jpg'
        alt=''
      />
      <div className={boxContent}>
        <div>Title Product</div>
        <div>Size: M</div>
        <div>$119.99</div>
        <div>SKU: 0123</div>
      </div>
      <div className={btnClose}>
        <IoIosClose />
      </div>
    </div>
  );
}

export default ItemProduct;
