import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true, ...props }) {
  const { button, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(button, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary
      })}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
