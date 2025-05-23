import React from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import bagIcon from '@icons/svgs/bagIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImage,
    title,
    money,
    containerItem,
    showFuncWhenHover,
    boxIcon
  } = styles;
  return (
    <div className={containerItem}>
      <div className={boxImg}>
        <img
          src={src}
          alt=''
        />
        <img
          src={prevSrc}
          alt=''
          className={showImage}
        />

        <div className={showFuncWhenHover}>
          <div className={boxIcon}>
            <img src={bagIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>
        <div className={title}>{name}</div>
        <div className={money}>${price}</div>
    </div>
  );
}

export default ProductItem;
