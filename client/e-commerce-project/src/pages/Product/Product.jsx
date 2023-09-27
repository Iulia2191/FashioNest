import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const images = [
    'https://images.pexels.com/photos/17433865/pexels-photo-17433865/free-photo-of-young-woman-in-a-red-dress-and-a-hat-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/17433863/pexels-photo-17433863/free-photo-of-young-woman-in-a-red-dress-and-a-hat-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
