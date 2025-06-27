import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React, { useContext, useState } from 'react';
import Steps from '@/pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import ContentStep from '@/pages/Cart/components/ContentStep';
import { StepperProvider } from '@/contexts/StepperProvider';

function Cart() {
  const { container } = styles;

  return (
    <StepperProvider>
      <Header />
      <div className={container}>
        <Steps />
        <MainLayout>
          <ContentStep />
        </MainLayout>
      </div>
      <Footer />
    </StepperProvider>
  );
}

export default Cart;
