import React, {useEffect} from 'react';
import Header from './header/Header';
import {useDispatch} from 'react-redux';
import {fetchMacs} from '../store/actions/macs';
import Main from './main/Main';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMacs());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
