import React from 'react';
import {Provider,useSelector} from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  const store = useSelector(store => store);
  return (
    <Provider>
      <div>hola</div>
    </Provider>
  )
}

export default App;
