import React, {useEffect} from 'react';
import Header from './header/Header';
import {useDispatch} from 'react-redux';
import {fetchMacs} from '../store/actions/macs';
import Main from './main/Main';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMacs());
  }, []); // Get macbooks keys

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
