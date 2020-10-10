import React from 'react';
import pic5 from '../../../assets/images/words.jpg';
import './style.css';

const SlideShow = () => {
  return (
    <div className="main-carousal">
      <div className="titles-container">
        <h1 className="title-1">أرقى اللوحات الفنية</h1>
        <h1 className="title-2">تجدونها هنا </h1>
        <p className="title-3">
          الفن العربي فن جميل يتضمن فن العمارة وفن الخط العربي وفن الزخرفة
        </p>
      </div>
      <div className="carousal-container">
        <div className="image-container">
          <img className="slider-image" src={pic5} alt="words" />
        </div>
      </div>
    </div>
  );
};
export default SlideShow;
