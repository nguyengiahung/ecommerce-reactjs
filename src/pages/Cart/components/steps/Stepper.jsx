import React from 'react';
import styles from '../../styles.module.scss';
import classNames from 'classnames';

function Stepper({ title, number, isDisabled }) {
  const { stepper, numberStep, titleStep, isDisableNumber, isDisableTitle } =
    styles;
  return (
    <div className={stepper}>
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
