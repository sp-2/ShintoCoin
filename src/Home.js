import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class Home extends Component {
	constructor(props) {
  		super(props);
  }

  render(){
		return (
      <div>
        <p>Welcome to ShintoCoins, ShintoCoins are coins made by solving algorithms! To get
          started, head over to Mine Coins and get to work!
         </p>
      </div>
		)
	}
}

export default Home;
