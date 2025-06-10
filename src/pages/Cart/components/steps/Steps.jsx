import React from 'react';
import styles from '../../styles.module.scss';
import Stepper from '@/pages/Cart/components/steps/Stepper';

function Steps() {
  const dataSteps = [
    { number: 1, title: 'SHOPPING CART' },
    { number: 2, title: 'CHECKOUT' },
    { number: 3, title: 'ORDER STATUS' }
  ];
  const { containerStep, line, steps, textNoti } = styles;
  return (
    <div className={containerStep}>
      <div className={steps}>
        {dataSteps.map((step, index) => {
          return (
            <>
              <Stepper
                key={index}
                title={step.title}
                number={step.number}
                isDisabled={index !== 0}
              />
              {step.number < dataSteps.length && <div className={line} />}
            </>
          );
        })}
      </div>
      <div className={textNoti}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  );
}

export default Steps;
