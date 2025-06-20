import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({
  content,
  isPrimary = true,
  customClassname = false,
  ...props
}) {
  const { button, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(button, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
        [customClassname]: customClassname
      })}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
