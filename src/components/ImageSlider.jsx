import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    "./Image1.jpg",
    "/images/sofa2.jpg",
    "/images/sofa3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-auto object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-md"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-md"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageSlider;
