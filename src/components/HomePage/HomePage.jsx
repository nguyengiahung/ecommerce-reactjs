import React from 'react';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';

function HomePage() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Header />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
