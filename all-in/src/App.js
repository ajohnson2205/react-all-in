import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';
import router from './router.js';

//my components
import Header from './components/Header.js'
import Body from './components/Body.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='body'>
          {router}
        </div>
      </div>

    );
  }
}

export default App;
