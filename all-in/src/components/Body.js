import React, {Component} from 'react';
import '../index.css';

import {Link} from 'react-router-dom';


//my components
// import StarWarsLookup from './StarWarsLookup.js'
import CatPictures from './CatPictures'


class Body extends Component{
  render() {
    return(
      <div>
        <div>
          <h1>Here is where the body is going to go</h1>
        </div>
        <div>
          <ul>
            <Link to="/catpictures">
              <li>Cat Pictures</li>
            </Link>
            <li>Star Wars Lookup</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Body;
