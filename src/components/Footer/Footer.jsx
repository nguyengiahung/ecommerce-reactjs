import React from 'react';
import styles from './styles.module.scss';
import logo from '@/assets/icons/images/logofooter.png';
import { dataMenuFooter } from '@components/Footer/constants';
import MenuFooter from '@components/Footer/MenuFooter/MenuFooter';
import paymentImg from '@/assets/icons/images/iconpayment.png';

function Footer() {
  const { container, containerMenu, logoFooter, containerPayment } = styles;
  return (
    <div className={container}>
      <img className={logoFooter} src={logo} alt='' />
      <div className={containerMenu}>
        {dataMenuFooter &&
          dataMenuFooter.map((item) => {
            return <MenuFooter content={item.content} href={item.href} />;
          })}
      </div>
      <div className={containerPayment}>
        <p>Guaranteed safe ckeckout</p>
        <img src={paymentImg} alt='' />
      </div>
      <div>
        Copyright © 2025 Hung Nguyen. Created by Hung Nguyen.
      </div>
    </div>
  );
}

export default Footer;
