import React, {useState} from 'react';
import {IMacs} from '../../../interfaces';
import {
  GrClose,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from 'react-icons/all';

interface IMacProps {
  mac: IMacs;
  handleCloseCarousel: () => void;
}

const CarouselImages: React.FC<IMacProps> = ({
  mac,
  handleCloseCarousel,
}: IMacProps) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const length: number = mac.url.img.length;

  if (!Array.isArray(mac.url.img) || length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const previousSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__icon-close" onClick={handleCloseCarousel}>
        <GrClose />
      </div>
      {mac.url.img.map((img, index) => (
        <div
          key={index}
          className={index === currentImg ? 'carousel__images' : ''}
        >
          {index === currentImg && <img src={img} alt="img" />}
        </div>
      ))}
      <BsArrowRightCircle onClick={nextSlide} className="right-arrow" />
      <BsArrowLeftCircle onClick={previousSlide} className="left-arrow" />
    </div>
  );
};

export default CarouselImages;
