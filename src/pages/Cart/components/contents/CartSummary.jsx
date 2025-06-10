import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
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

  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
  ];
  return (
    <div className={containerSummary}>
      <div className={containerTotal}>
        <div className={title}>CART TOTALS</div>
        <div className={boxSubTotal}>
          <div>Subtotal</div>
          <div>$2.3223</div>
        </div>
        <div className={boxTotal}>
          <div>TOTAL</div>
          <div>$2.3223</div>
        </div>
        <div className={btnButton}>
          <Button content={'PROCCEED TO CHECKOUT'} />
          <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
        </div>
      </div>
      <div className={containerMethods}>
        <div className={titleMethods}>
          GUARANTEED <span>SAFE</span> CHECKOUT
        </div>
        <div className={boxLogo}>
          {srcMethods.map((src, index) => {
            return <img src={src} key={index} alt='' />;
          })}
        </div>
      </div>
        <div style={{ textAlign: 'center',marginTop: '15px' }}>Your Payment is 100% Secure</div>
    </div>
  );
}

export default CartSummary;
