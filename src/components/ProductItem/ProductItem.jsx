import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import bagIcon from '@icons/svgs/bagIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import Button from '@components/Button/Button';
import classNames from 'classnames';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true
}) {
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [sizeChoose, setSizeChoose] = useState('');
  const {
    boxImg,
    showImage,
    title,
    money,
    containerItem,
    showFuncWhenHover,
    boxIcon,
    boxSize,
    size,
    boxInfo,
    boxBtn,
    boxContent,
    brand,
    boxInfoHomePage,
    boxContentHomePage,
    boxContentList,
    largeImg,
    isActiveSize,
    btnClear
  } = styles;

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  return (
    <div style={{ marginBottom: '10px' }} className={isShowGrid ? '' : containerItem}>
      <div
        className={classNames(boxImg, {
          [largeImg]: !isShowGrid
        })}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImage} />

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
      <div
        className={classNames(boxContent, {
          [boxContentHomePage]: isHomePage,
          [boxContentList]: !isHomePage && !isShowGrid
        })}
      >
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  onClick={() => handleChooseSize(item.name)}
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.name
                  })}
                  key={index}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoose && (
          <div onClick={() => handleClearSize()} className={btnClear}>
            clear
          </div>
        )}

        <div
          className={classNames(boxInfo, {
            [boxInfoHomePage]: isHomePage
          })}
        >
          <div className={title}>{name}</div>
          {!isHomePage && <div className={brand}>Brand {details.type}</div>}
          <div className={money}>${price}</div>
        </div>
        {!isHomePage && (
          <div className={boxBtn}>
            <Button content={'ADD TO CART'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
