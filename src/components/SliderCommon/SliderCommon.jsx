import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ProductItem from '@components/ProductItem/ProductItem';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight />,
    prevArrow: <MdKeyboardArrowLeft />
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        const src = !item.image ? item.images[0] : item.image;
        return (
          <>
            {isProductItem ? (
              <ProductItem
                src={src}
                prevSrc={src}
                name={item.name}
                price={item.price}
                details={item}
                slideItem
                isHomePage={false}
              />
            ) : (
              <img src={item} key={index} alt='test' />
            )}
          </>
        );
      })}
    </Slider>
  );
}

export default SliderCommon;
