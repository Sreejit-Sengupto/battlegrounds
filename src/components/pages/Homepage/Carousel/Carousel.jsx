import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Modal from 'react-modal';
import { carouselData } from "./CarouselData";

const Carousel = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const [selectedImage, setSelectedImage] = React.useState('');

  // const openModal = (image) => {
  //   setIsOpen(true);
  //   setSelectedImage(image);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedImage('');
  // };

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
    <div className="bg-carouselImg h-[40rem] flex flex-col justify-center items-center overflow-hidden">
      <p className="text-white text-5xl font-oswald pb-20">PARTNERS</p>
      <Slider {...settings} className="w-[100rem]">{slider}</Slider>
      {/* <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <img src={selectedImage} alt="Enlarged Image" style={{ objectFit: 'contain', maxHeight: '80vh', maxWidth: '80vw' }} />
        <button onClick={closeModal}>Close</button>
      </Modal> */}
    </div>
  );
};

export default Carousel;
