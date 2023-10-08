import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import  { useState } from 'react';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const data = [
    "./img/Dark Simple Minimalist Modern Photo Collage Fashion Facebook Cover.png",
    "./img/fashion-portrait-young-elegant-woman.jpg",
    "./img/model-wears-beige-trench-coat-from-brand-new-collection.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1)); 
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='slider'>
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((image, index) => (
          <img key={index} src={image} loading='lazy' alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
