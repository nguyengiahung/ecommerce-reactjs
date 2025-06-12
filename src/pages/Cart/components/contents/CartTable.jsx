import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import { CiTrash } from 'react-icons/ci';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import LoadingCart from '@/pages/Cart/components/LoadingCart';

function CartTable({
  listProductCart,
  getChangeData,
  isLoading,
  getDataDelete,deleteAllData
}) {
  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' }
  ];

  const getValueSelect = (userId, productId, quantity, size) => {
    const data = {
      userId,
      productId,
      quantity,
      size,
      isMultiple: true
    };
    getChangeData(data);
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
    clearTrash,
    contentTrashBtn,
    containerCart
  } = styles;
  return (
    <div className={containerCart}>
      <div>
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
            {listProductCart.map((item) => (
              <tr key={item.id}>
                <td className={styles.productCell}>
                  <img
                    src={item.images[0]}
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
                    <CiTrash
                      className={deleteBtn}
                      onClick={() =>
                        getDataDelete({
                          userId: item.userId,
                          productId: item.productId
                        })
                      }
                    />
                  </div>
                </td>
                <td className={priceItem}>${item.price.toFixed(2)}</td>
                <td className={skuItem}>{item.sku}</td>
                <td>
                  <SelectBox
                    options={showOptions}
                    getValue={(e) =>
                      getValueSelect(item.userId, item.productId, e, item.size)
                    }
                    type='sort'
                    defaultValue={item.quantity}
                  />
                </td>
                <td className={totalItem}>${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={boxCoupon}>
          <div className={inputCoupon}>
            <input type='text' placeholder='Coupon Code' />
            <Button content={'OK'} isPrimary={false} />
          </div>
          <div className={clearBtn} onClick={() => deleteAllData()}>
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
      {isLoading && <LoadingCart />}
    </div>
  );
}

export default CartTable;
