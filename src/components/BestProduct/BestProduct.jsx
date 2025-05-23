import React from 'react';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function BestProduct({ data }) {
  const { container } = styles;
  return (
    <div className={container}>
      {data &&
        data.map((item) => {
          return (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          );
        })}
    </div>
  );
}

export default BestProduct;
