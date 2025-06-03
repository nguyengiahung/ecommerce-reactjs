import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function ListProducts() {
  const { containerProduct } = styles;
  const { products, isShowGrid, isLoading } = useContext(OurShopContext);
  return (
    <MainLayout>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div className={isShowGrid ? containerProduct : ''}>
            {products &&
              products.map((item) => {
                return (
                  <ProductItem
                    src={item.images[0]}
                    prevSrc={item.images[1]}
                    name={item.name}
                    price={item.price}
                    details={item}
                    isHomePage={false}
                  />
                );
              })}
          </div>
          <div style={{ margin: '20px auto 70px', width: '180px'}}>
            <Button content={'LOAD MORE PRODUCTS'} isPrimary={false}/>
          </div>
        </>
      )}
    </MainLayout>
  );
}

export default ListProducts;
