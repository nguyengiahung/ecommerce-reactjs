import React from 'react';
import styles from './styles.module.scss';

function PaymentMethod() {
  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
  ];
  const { containerMethods, titleMethods, boxLogo } = styles;
  return (
    <div>
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
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        Your Payment is 100% Secure
      </div>
    </div>
  );
}

export default PaymentMethod;
