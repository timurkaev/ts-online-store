import React from 'react';
import Macs from './macs/Macs';
import './styles.scss';
import MacInfo from './macs/macInfo/MacInfo';
import {Route, Switch} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Main: React.FC = () => {
  const {macs} = useTypedSelector((state) => state.macs);

  return (
    <div className="main">
      <Switch>
        <Route path={'/'} exact>
          <Macs />
        </Route>
        {macs.map((mac) => (
          <Route key={mac.id} path={`/${mac.id}`} exact>
            <MacInfo mac={mac} />
          </Route>
        ))}
      </Switch>
    </div>
  );
};

export default Main;
