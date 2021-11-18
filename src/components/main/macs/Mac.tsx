import React, {useState} from 'react';
import {IMacs} from '../../../interfaces';
import './styles.scss';
import CarouselImages from './CarouselImages';

interface IMacsProps {
  mac: IMacs;
}

const Mac: React.FC<IMacsProps> = ({mac}: IMacsProps) => {
  const [showCarouselImages, setShowCarouselImages] = useState(false);

  const handleShowCarouselImages = (): void => {
    setShowCarouselImages(true);
  };
  const handleCloseCarousel = (): void => {
    setShowCarouselImages(false);
  };

  return (
    <>
      {!showCarouselImages ? (
        <div className="mac">
          <div className="mac__image">
            <img
              onClick={handleShowCarouselImages}
              src={mac.url.img}
              alt="img"
            />
            <div className="info">
              {mac.displaySize} {mac.categories} {mac.color} [{mac.resolution},
              {mac.displayType}, {mac.CPU}, {mac.CPUCores} ядер, RAM{mac.RAM}ГБ,
              SSD {mac.SSD}ГБ, {mac.GPU}]
            </div>
          </div>
          <div className="mac__price">
            <div>{mac.price} ₽</div>
            <button>Купить</button>
          </div>
        </div>
      ) : (
        <CarouselImages handleCloseCarousel={handleCloseCarousel} mac={mac} />
      )}
    </>
  );
};

export default Mac;
