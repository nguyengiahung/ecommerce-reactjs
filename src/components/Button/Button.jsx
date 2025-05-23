import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true }) {
  const {button, primaryBtn, secondaryBtn} = styles;
  return <button className={classNames(button, {
    [primaryBtn]: isPrimary,
    [secondaryBtn]: !isPrimary,
  })}>{content}</button>;
}

export default Button;
