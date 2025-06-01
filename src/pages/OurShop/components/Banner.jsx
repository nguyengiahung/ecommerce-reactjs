import React from 'react';
import styles from '../styles.module.scss';
import CountDownTime from '@components/CountDownTime/CountDownTime';
import Button from '@components/Button/Button';

function Banner() {
  const { containerBanner, title, containerCountDown } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <>
      <div className={containerBanner}>
        <div className={containerCountDown}>
          <CountDownTime targetDate={targetDate} />
        </div>
        <h3 className={title}>The Classics Make A Comeback</h3>
        <Button content={'Buy now'} />
      </div>
    </>
  );
}

export default Banner;
