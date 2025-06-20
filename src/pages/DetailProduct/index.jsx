import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { IoCartOutline } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import PaymentMethod from '@components/PaymentMethod/PaymentMethod';
import AccordionMenu from '@components/AccordionMenu/AccordionMenu';
import InformationProduct from '@/pages/DetailProduct/components/Information';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { getProductById } from '@/apis/productsService';
import classNames from 'classnames';
function DetailProduct() {
  const {
    container,
    navigateSection,
    contentSection,
    price,
    description,
    titleSize,
    boxSize,
    title,
    boxImage,
    boxContent,
    image,
    clear,
    sizeItem,
    boxOr,
    line,
    functionInfo,
    btnAddCart,
    btnBuyNow,
    boxBtnBuy,
    boxAddToCart,
    btnCart,
    adjustQuantity,
    iconFunction,
    boxFunction,
    textInfo,
    active,
    activeDisabledBtn
  } = styles;
  const { detailProduct, setDetailProduct } = useContext(SidebarContext);
  const [menuSelected, setMenuSelected] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantity, setQuantity] = useState(1);
  console.log(detailProduct);
  const INCREMENT = 'increment';
  const DECREMENT = 'decrement';
  // useEffect(() => {
  //   getProductById(detailProduct._id)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [detailProduct._id]);

  const tempDataSlider = [
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.2-min.jpg',
      name: 'Test Product 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'S' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.2-min.jpg',
      name: 'Test Product 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'S' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.2-min.jpg',
      name: 'Test Product 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'S' }]
    }
  ];
  const tempDataSize = [
    {
      name: 'S',
      amount: '1000'
    },
    {
      name: 'M',
      amount: '1000'
    }
  ];
  const dataAccordionMenu = [
    {
      id: 1,
      titleMenu: 'ADDITIONAL INFORMATION',
      content: <InformationProduct />
    },
    {
      id: 2,
      titleMenu: 'REVIEW (0)',
      content: <ReviewProduct />
    }
  ];

  const handleRenderZoomImage = (src) => {
    return (
      <ReactImageMagnifier
        srcPreview={src}
        srcOriginal={src}
        width={295}
        height={350}
        objectFit='contain'
      />
    );
  };

  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
  };

  const handleSelectedSize = (size) => {
    setSizeSelected(size);
  };
  const handleClearSelectedSize = () => {
    setSizeSelected('');
  };

  const handleSetQuantity = (action) => {
    // const count = quantity;
    // if (quantity < 1) return;
    // switch (action) {
    //   case 'increase':
    //     return setQuantity(count + 1);
    //     break;
    //   case 'decrease':
    //     return setQuantity(count - 1);
    //     break;
    //   default:
    //     break;
    // }  
    if (quantity < 1) return;
    setQuantity((prev) =>
      action === INCREMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1)
    );
  };

  return (
    <div>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div>Home `{'>'}` Men</div>
            <div>`{'<'}`Return to previous page</div>
          </div>
          <div className={contentSection}>
            <div className={boxImage}>
              {detailProduct &&
                detailProduct.images &&
                detailProduct.images.map((src) => {
                  return handleRenderZoomImage(src);
                })}
            </div>
            <div className={boxContent}>
              <h1 className={title}>{detailProduct && detailProduct.name}</h1>
              <p className={price}>${detailProduct && detailProduct.price}</p>
              <p className={description}>
                {detailProduct && detailProduct.description}
              </p>

              <p className={titleSize}>Size {sizeSelected}</p>
              <div className={boxSize}>
                {/* {detailProduct &&
                  detailProduct.size &&
                  detailProduct.size.map((item, index) => {
                    <div key={index} className={sizeItem}>
                      {item.name}
                    </div>;
                  })} */}
                {tempDataSize.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames(sizeItem, {
                        [active]: item.name === sizeSelected
                      })}
                      onClick={() => handleSelectedSize(item.name)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              {sizeSelected && (
                <div className={clear} onClick={handleClearSelectedSize}>
                  Clear
                </div>
              )}
              <div className={functionInfo}>
                <div className={boxAddToCart}>
                  <div className={adjustQuantity}>
                    <div onClick={() => handleSetQuantity(DECREMENT)}>-</div>
                    <div>{quantity}</div>
                    <div onClick={() => handleSetQuantity(INCREMENT)}>+</div>
                  </div>
                  <div className={btnCart}>
                    <Button
                      customClassname={!sizeSelected && activeDisabledBtn}
                      style={{ width: '100%' }}
                      content={
                        <div className={btnAddCart}>
                          <IoCartOutline />
                          ADD TO CART
                        </div>
                      }
                    />
                  </div>
                </div>
                <div className={boxOr}>
                  <div className={line}></div>
                  <div style={{ fontSize: '12px' }}>OR</div>
                  <div className={line}></div>
                </div>
                <div className={boxBtnBuy}>
                  <Button
                    customClassname={!sizeSelected && activeDisabledBtn}
                    content={
                      <div className={btnBuyNow}>
                        <IoCartOutline />
                        <span>BUY NOW</span>
                      </div>
                    }
                  />
                </div>
                <div className={boxFunction}>
                  <div>
                    <CiHeart className={iconFunction} />
                  </div>
                  <div>
                    <TfiReload className={iconFunction} />
                  </div>
                </div>
                <PaymentMethod />
                <div>
                  <div>
                    Brand: <span className={textInfo}>Brand 01</span>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    SKU: <span className={textInfo}>12345</span>
                  </div>
                  <div>
                    Category: <span className={textInfo}>Men</span>
                  </div>
                </div>
                <div>
                  {/* <AccordionMenu /> */}
                  {dataAccordionMenu.map((item, index) => (
                    <AccordionMenu
                      titleMenu={item.titleMenu}
                      contentJsx={item.content}
                      key={index}
                      onClick={() => handleSetMenuSelected(item.id)}
                      isSelected={menuSelected === item.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ textAlign: 'center', fontWeight: 400 }}>
              Related products
            </h2>
            <SliderCommon data={tempDataSlider} isProductItem showItem={4} />
          </div>
        </MainLayout>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
