import React from 'react';
import {IMacs} from '../../../../interfaces';
import './styles.scss';

interface IMacProps {
    mac: IMacs
}

const MacInfo: React.FC<IMacProps> = ({mac}: IMacProps) => {
  return (
    <div className="product__info">
      <h1>{mac.displaySize} {mac.fullName} {mac.color}</h1>
      <div className="product__info-image">
        <img src={mac.url.img} alt="img"/>
        <div className='product__info=specification'>
          {mac.displaySize} {mac.categories} {mac.color} [{mac.resolution},
          {mac.displayType}, {mac.CPU}, {mac.CPUCores} ядер, RAM{mac.RAM}ГБ,
            SSD {mac.SSD}ГБ, {mac.GPU}]
        </div>
      </div>
    </div>
  );
};

export default MacInfo;
