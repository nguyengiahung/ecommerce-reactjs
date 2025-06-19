import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useState } from 'react';
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
    size,
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
    textInfo
  } = styles;
  const [menuSelected, setMenuSelected] = useState(1);
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

  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
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
              <img
                className={image}
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                alt=''
              />
              <img
                className={image}
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                alt=''
              />
              <img
                className={image}
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                alt=''
              />
              <img
                className={image}
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                alt=''
              />
            </div>
            <div className={boxContent}>
              <h1 className={title}>Amet faucibus nunc</h1>
              <p className={price}>${1.87999}</p>
              <p className={description}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </p>

              <p className={titleSize}>Size S</p>
              <div className={boxSize}>
                <div className={size}>S</div>
                <div className={size}>M</div>
                <div className={size}>S</div>
              </div>
              <div className={clear}>Clear</div>
              <div className={functionInfo}>
                <div className={boxAddToCart}>
                  <div className={adjustQuantity}>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                  </div>
                  <div className={btnCart}>
                    <Button
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
            More actions
            <h2>Related products</h2>
            <SliderCommon data={tempDataSlider} isProductItem showItem={4} />
          </div>
        </MainLayout>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
