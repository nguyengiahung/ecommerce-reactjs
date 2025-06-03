import CountDownTime from '@components/CountDownTime/CountDownTime';
import React from 'react';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingProduct({ data }) {
  const { container, containerItemRight } = styles;
  return (
    <div>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItemRight}>
          {data.map((item) => {
            return (
              <ProductItem
                key={item.id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
                details={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeadingProduct;
