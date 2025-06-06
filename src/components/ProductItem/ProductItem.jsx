import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import bagIcon from '@icons/svgs/bagIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import Button from '@components/Button/Button';
import classNames from 'classnames';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

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
  const userId = Cookies.get('userId');
  const { setIsOpen, setType, handleGetListProductsCart } =
    useContext(SidebarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add cart!');
      return;
    }
    if (!sizeChoose) {
      toast.warning('Please choose size!');
      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose
    };

    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        toast.success('Add to cart successfully!');
        setIsLoading(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        toast.error('Add to cart failed');
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{ marginBottom: '10px' }}
      className={isShowGrid ? '' : containerItem}
    >
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
            <Button
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
