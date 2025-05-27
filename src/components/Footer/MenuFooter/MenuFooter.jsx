import React from 'react';
import styles from '../../Footer/styles.module.scss';

function MenuFooter({ content, href }) {
  const { menuFooter } = styles;

  return <div className={menuFooter}>{content}</div>;
}

export default MenuFooter;
