import React, { useContext, useState } from 'react';
import { SidebarContext } from '@/contexts/SidebarProvider';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import { IoCartOutline } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import classNames from 'classnames';
import { addProductToCart } from '@/apis/cartService';
function DetailProduct() {
  const {
    detailProduct,
    userId,
    setType,
    handleGetListProductsCart,
    setIsLoading,
    setIsOpen
  } = useContext(SidebarContext);
  const [chooseSize, setChooseSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' }
  ];
  const handleGetSize = (value) => {
    setChooseSize(value);
  };

  const removeSize = () => {
    setChooseSize('');
  };

  const handleGetQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const data = {
      userId: userId,
      productId: detailProduct._id,
      quantity: quantity,
      size: chooseSize,
      isMultiple: true
    };
    setIsOpen(false);
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const {
    container,
    boxInfo,
    infoTitle,
    infoPrice,
    infoDesc,
    boxSize,
    size,
    boxAddToCart,
    btnAddCart,
    btnBuyNow,
    boxOr,
    line,
    boxAction,
    boxBtnBuy,
    boxFooter,
    isActive,
    clear
  } = styles;
  return (
    <div className={container}>
      <div>
        <SliderCommon data={detailProduct && detailProduct.images} />
      </div>

      <div className={boxInfo}>
        <div className={infoTitle}>{detailProduct.name}</div>
        <div className={infoPrice}>${detailProduct.price}</div>
        <div className={infoDesc}>{detailProduct.description}</div>
        <div>
          <div style={{ fontSize: '16px', color: '#333' }}>
            Size {chooseSize}
          </div>
          <div className={boxSize}>
            {detailProduct.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(size, {
                    [isActive]: chooseSize === item.name
                  })}
                  onClick={() => handleGetSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          {chooseSize && (
            <div className={clear} onClick={() => removeSize()}>
              clear
            </div>
          )}
        </div>
      </div>

      <div className={boxAddToCart}>
        <SelectBox
          options={showOptions}
          type='show'
          defaultValue={quantity}
          getValue={handleGetQuantity}
        />
        <Button
          content={
            <div className={btnAddCart}>
              <IoCartOutline />
              ADD TO CART
            </div>
          }
          onClick={handleAddToCart}
        />
      </div>

      <div className={boxOr}>
        <div className={line}></div>
        <div style={{ fontSize: '12px' }}>OR</div>
        <div className={line}></div>
      </div>

      <div className={boxBtnBuy}>
        <Button
          content={
            <div className={btnBuyNow}>
              <IoCartOutline />
              <span>BUY NOW</span>
            </div>
          }
        />
      </div>

      <div className={boxAction}>
        <TfiReload />
        <div>Add to compare</div>
      </div>
      <div className={boxAction}>
        <CiHeart style={{ fontSize: '20px' }} />
        <div>Add to wishList</div>
      </div>
      <div className={boxFooter}>
        SKU: <span>12349</span>
      </div>
      <div className={boxFooter}>
        Category: <span>Pullovers</span>
      </div>
      <div className={boxFooter}>
        Estimated delivery: <span>3 - 5 days</span>
      </div>
      <div className={boxFooter}>
        Share:{' '}
        <span>
          <FaXTwitter />
          <FaFacebookF />
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
