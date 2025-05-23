import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import img1 from '@/assets/icons/images/ImageSale1.jpeg';
import img2 from '@/assets/icons/images/ImageSale2.jpeg';
import useTranslateX from '@components/SaleHomePage/translateX';
function SaleHomePage() {
  const { container, content, title, desc, boxImage } = styles;

  const { translateXPosition } = useTranslateX();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src={img1} alt='' />
      </div>
      <div className={content}>
        <h2 className={title}>Sale Of The Year</h2>
        <p className={desc}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <Button isPrimary={false} content={'Read more'} />
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${-translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src={img2} alt='' />
      </div>
    </div>
  );
}

export default SaleHomePage;
