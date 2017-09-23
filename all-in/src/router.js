import React from 'react';
import {Switch, Route} from 'react-router-dom';


import App from './App.js'
import Body from './components/Body.js'
import CatPictures from './components/CatPictures.js'

export default(
  <Switch>
    <Route component={Body} exact path="/" />
    <Route component={CatPictures} path="/catpictures" />
  </Switch>
)
