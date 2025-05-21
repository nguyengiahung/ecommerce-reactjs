import React from 'react';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';

function HomePage() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '-1' }}>
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
