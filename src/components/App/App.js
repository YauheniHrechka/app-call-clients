import React from 'react';
import './App.scss';

import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/actions/items';
import { Context } from '../../context/context';

import axios from 'axios';

import Header from '../Header/Header';
import Items from '../Items/Items';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    axios.get('http://localhost:3000/db.json')
      .then(res => dispatch(setItems(res.data.items)));

  }, []);

  return (
    <Context.Provider value={dispatch} >
      <div className="app">
        <Header />
        <Items />
      </div>
    </Context.Provider>
  );
}

export default App;
