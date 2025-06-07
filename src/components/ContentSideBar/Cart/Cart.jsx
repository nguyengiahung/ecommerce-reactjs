import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { SidebarContext } from '@/contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
  const { container, boxContent, boxBtn, boxPrice, containerListProductCart } =
    styles;
  const { listProductCart, isLoading } = useContext(SidebarContext);
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<CiShoppingCart />} title={'CART'} />
        <div className={containerListProductCart}>
          {isLoading ? (
            <LoadingTextCommon />
          ) : (
            listProductCart.map((item, index) => {
              return (
                <ItemProduct
                  key={index}
                  src={item.images[0]}
                  name={item.name}
                  sku={item.sku}
                  price={item.price}
                  size={item.size}
                  quantity={item.quantity}
                  productId={item.productId}
                  userId={item.userId}
                />
              );
            })
          )}
        </div>
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
