import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "./CarouselData";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slider = carouselData.map((item) => {
    return (
      <div className="px-3">
        <img src={item.img} alt={item.img} className="w-[50rem]" />
        <p className="font-teko text-2xl pl-3 my-3 text-white">{item.name}</p>
        <p className="font-teko text-xl pl-3 text-white">{item.date}</p>
      </div>
    );
  });

  return (
    <div className="bg-carouselImg h-[40rem] w-[100rem] flex flex-col justify-center items-center overflow-x-hidden">
      <p className="text-white text-5xl font-oswald pb-20">PARTNERS</p>
      <Slider {...settings} className="w-[100rem] lg:w-full lg:overflow-hidden">{slider}</Slider>
    </div>
  );
};

export default Carousel;
