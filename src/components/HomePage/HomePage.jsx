import React, { useEffect } from 'react';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Product from '@components/Product/Product';
import Info from '@components/Info/Info';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Header />
        <Banner />
        <Info />
        <Product />
        <SaleHomePage />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
