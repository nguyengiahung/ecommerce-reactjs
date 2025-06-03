import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

function ListProducts() {
  const { containerProduct } = styles;
  const { products } = useContext(OurShopContext);
  console.log(products);
  return (
    <MainLayout>
      <div className={containerProduct}>
        {products &&
          products.map((product) => {
            return (
              <ProductItem
                src={product.images[0]}
                prevSrc={product.images[1]}
                name={product.name}
                price={product.price}
              />
            );
          })}
      </div>
    </MainLayout>
  );
}

export default ListProducts;
