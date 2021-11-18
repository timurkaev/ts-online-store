import React from 'react';
import Header from './header/Header';
import {useDispatch} from 'react-redux';
import {fetchMacs} from '../store/actions/macs';
import Main from './main/Main';

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMacs());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
