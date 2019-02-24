import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form.js'

class Sell extends Component {
	constructor(props) {
      super(props); 
      this.addInput = this.addInput.bind(this); 	
  }

  addInput(itemVal) {
    const transaction = {type:"Sold", quantity:itemVal, value:0}
    console.log(transaction); 
    this.props.addTransaction(transaction);
  }

  render(){
		return (
      <div>
        <h1>Sell ShintoCoins</h1>
        <p>Current ShintoCoin Value: ${this.props.coinVal}</p>
        <p>Number of ShintoCoins Owned: {this.props.numCoins}</p>
        <Form action="Sell" onSubmit={this.addInput}></Form>
        </div>
		)
	}
}

export default Sell;
