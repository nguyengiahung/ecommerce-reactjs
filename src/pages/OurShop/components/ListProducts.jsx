import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function ListProducts() {
  const { containerProduct, sectionListProduct, loading } = styles;
  const { products, isShowGrid, isLoading, handleLoadmore, total, isLoadMore } =
    useContext(OurShopContext);
  return (
    <div className={sectionListProduct}>
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
            {products.length < total && (
              <div style={{ margin: '20px auto 70px', width: '180px' }}>
                <Button
                  onClick={handleLoadmore}
                  content={
                    isLoadMore ? (
                      <AiOutlineLoading3Quarters className={loading}/>
                    ) : (
                      'LOAD MORE PRODUCTS'
                    )
                  }
                  isPrimary={false}
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProducts;
