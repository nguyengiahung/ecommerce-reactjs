import React, { useCallback, useContext } from 'react';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { StepperContext } from '@/contexts/StepperProvider';

function Stepper({ title, number, isDisabled }) {
  const { stepper, numberStep, titleStep, isDisableNumber, isDisableTitle } =
    styles;
  const { setCurrentStep } = useContext(StepperContext);
  return (
    <div className={stepper} onClick={() => setCurrentStep(number)}>
      <div
        className={classNames(numberStep, {
          [isDisableNumber]: isDisabled
        })}
      >
        {number}
      </div>
      <div
        className={classNames(titleStep, {
          [isDisableTitle]: isDisabled
        })}
      >
        {title}
      </div>
    </div>
  );
}

export default Stepper;
