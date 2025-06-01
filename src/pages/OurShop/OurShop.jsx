import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';

function OurShop() {
  const { container, functionBox, btnBack, specialText } = styles;
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>Shop</span>
            </div>
            <div onClick={() => handleBackNavigate()} className={btnBack}>
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
      </MainLayout>
    </>
  );
}

export default OurShop;
