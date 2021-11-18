import React from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {IMacs} from '../../../interfaces';
import Mac from './Mac';

const Macs: React.FC = () => {
  const {macs, loading, error} = useTypedSelector((state) => state.macs);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {macs.map((mac: IMacs) => (
        <Mac key={mac.id} mac={mac} />
      ))}
    </>
  );
};

export default Macs;
