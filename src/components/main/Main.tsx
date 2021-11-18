import React from 'react';
import Macs from './macs/Macs';
import './styles.scss';

const Main: React.FC = () => {
  return (
    <div className="main">
      <Macs />
    </div>
  );
};

export default Main;
