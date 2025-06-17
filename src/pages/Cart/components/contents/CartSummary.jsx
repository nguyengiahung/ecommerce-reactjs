import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import { SidebarContext } from '@/contexts/SidebarProvider';
import LoadingCart from '@/pages/Cart/components/LoadingCart';
import PaymentMethod from '@components/PaymentMethod/PaymentMethod';
function CartSummary() {
  const {
    containerSummary,
    containerTotal,
    title,
    boxSubTotal,
    boxTotal,
    btnButton,
    containerMethods,
    titleMethods,
    boxLogo
  } = styles;
  const { listProductCart, isLoading } = useContext(SidebarContext);
  

  const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={containerSummary}>
      <div className={containerTotal}>
        <div className={title}>CART TOTALS</div>
        <div className={boxSubTotal}>
          <div>Subtotal</div>
          <div>${total.toFixed(2)}</div>
        </div>
        <div className={boxTotal}>
          <div>TOTAL</div>
          <div>${total.toFixed(2)}</div>
        </div>
        <div className={btnButton}>
          <Button content={'PROCCEED TO CHECKOUT'} />
          <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
        </div>
      </div>
      <PaymentMethod />
      {isLoading && <LoadingCart />}
    </div>
  );
}

export default CartSummary;
