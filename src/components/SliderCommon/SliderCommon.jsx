import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function SliderCommon({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight />,
    prevArrow: <MdKeyboardArrowLeft />
  };

  return (
    <Slider {...settings}>
      {data.map((src, index) => {
        return <img src={src} key={index} alt='' />;
      })}
    </Slider>
  );
}

export default SliderCommon;
