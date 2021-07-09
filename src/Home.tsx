import React from 'react';
import ItemList from './components/itemList';
import Navbar from './components/Navbar/Navbar';

import { Provider } from 'react-redux';
import store from "./redux/store"

class Home extends React.Component<{}, {}> {
  public render() {

    return (

// The home page

      <Provider store={store}>
        <div>
          <ItemList/>
          <Navbar/>
          <h2>Items : </h2>
        </div>
      </Provider>
    );
  }
}

export default Home;
