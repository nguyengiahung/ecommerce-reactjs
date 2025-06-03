import MainLayout from '@components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import HeadingProduct from '@components/Product/HeadingProduct/HeadingProduct';
import BestProduct from '@components/BestProduct/BestProduct';
import { getProducts } from '@/apis/productsService';

function Product() {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {

    const query = {
      sortType: 0,
      page: 1,
      limit: 14
    }

    getProducts(query).then((res) => {
      setListProducts(res.contents);
    })
  }, []);
  const { container, containerTitle, title, desc, headline } = styles;
  return (
    <MainLayout>
      <div>
        <div className={container}>
          <div className={headline}></div>
          <div className={containerTitle}>
            <p className={desc}>Don't miss super offers</p>
            <h2 className={title}>Our best products</h2>
          </div>
          <div className={headline}></div>
        </div>
        <HeadingProduct data={listProducts.slice(0,2)}/>
        <BestProduct data={listProducts.slice(2, 14)}/>
      </div>
    </MainLayout>
  );
}

export default Product;
