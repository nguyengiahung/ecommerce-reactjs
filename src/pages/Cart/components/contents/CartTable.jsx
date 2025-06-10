import React from 'react';
import styles from '../../styles.module.scss';
import { CiTrash } from 'react-icons/ci';
import img from '../../../../assets/icons/images/banner.jpeg';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';

function CartTable() {
  const cartItems = [
    {
      id: 1,
      name: 'Consectetur nibh at',
      price: 119.99,
      sku: '12349',
      size: 'M',
      image: '../../../'
    },
    {
      id: 2,
      name: 'Amet faucibus nunc',
      price: 1879.99,
      sku: '87654',
      size: 'M',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 3,
      name: 'Duis aute irure',
      price: 304.89,
      sku: '12420',
      size: 'M',
      image: 'https://via.placeholder.com/80'
    }
  ];
  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' }
  ];

  const getValueSelect = (value, type) => {
    console.log('123');
  };
  const {
    cartTable,
    deleteBtn,
    priceItem,
    skuItem,
    totalItem,
    boxCoupon,
    inputCoupon,
    clearBtn,
    clearTrash,contentTrashBtn
  } = styles;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <table className={cartTable}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th></th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className={styles.productCell}>
                <img
                  src={img}
                  alt={item.name}
                  className={styles.productImage}
                />
                <div>
                  <div className={styles.productName}>{item.name}</div>
                  <div className={styles.productSize}>Size: {item.size}</div>
                </div>
              </td>
              <td>
                <div>
                  <CiTrash className={deleteBtn} />
                </div>
              </td>
              <td className={priceItem}>${item.price.toFixed(2)}</td>
              <td className={skuItem}>{item.sku}</td>
              <td>
                <SelectBox
                  options={showOptions}
                  getValue={getValueSelect}
                  type='sort'
                />
              </td>
              <td className={totalItem}>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={boxCoupon}>
        <div className={inputCoupon}>
          <input type='text' placeholder='Coupon Code' />
          <Button content={'OK'} isPrimary={false} />
        </div>
        <div className={clearBtn}>
          {/* <CiTrash className={clearTrash} /> */}
          <Button
            content={
              <div className={contentTrashBtn}>
                <CiTrash className={clearTrash} />
                CLEAR SHOPPING CART
              </div>
            }
            isPrimary={false}
          />
        </div>
      </div>
    </div>
  );
}

export default CartTable;
