import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { PiHandbagSimple } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { PiEye } from 'react-icons/pi';
import { GrRotateLeft } from 'react-icons/gr';
import Button from '@components/Button/Button';
import classNames from 'classnames';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';
import { addProductToCartSidebar } from '@/utils/helper';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
  slideItem = false
}) {
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [sizeChoose, setSizeChoose] = useState('');
  const userId = Cookies.get('userId');
  const navigate = useNavigate('');
  const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
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
    btnClear,
    icon
  } = styles;

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);
  useEffect(() => {
    if (slideItem) setIsShowGrid(true);
  }, [slideItem]);
  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };

  const handleNavigateToDetail = () => {
    const path = `/product/${details._id}`;
    navigate(path);
    setDetailProduct(details);
  };

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  const handleAddToCart = () => {
    addProductToCartSidebar(
      userId,
      setIsOpen,
      setType,
      toast,
      sizeChoose,
      details._id,
      1,
      setIsLoading,
      handleGetListProductsCart
    );
  };

  return (
    <div
      style={{ marginBottom: '10px', cursor: 'pointer' }}
      className={isShowGrid ? '' : containerItem}
    >
      <div
        className={classNames(boxImg, {
          [largeImg]: !isShowGrid
        })}
        onClick={handleNavigateToDetail}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImage} />

        <div className={showFuncWhenHover}>
          <div className={boxIcon}>
            <PiHandbagSimple className={icon} />
          </div>
          <div className={boxIcon}>
            <CiHeart className={icon} />
          </div>
          <div className={boxIcon}>
            <GrRotateLeft className={icon} />
          </div>
          <div
            className={boxIcon}
            onClick={() => handleShowDetailProductSideBar()}
          >
            <PiEye className={icon} />
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
