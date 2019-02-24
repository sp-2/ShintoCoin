import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form.js'

class Buy extends Component {
	constructor(props) {
      super(props); 

      this.addInput = this.addInput.bind(this);   	
  }

  addInput(itemVal) {
    const transaction = {type:"Bought", quantity:itemVal, value:0}
    console.log(transaction); 
    this.props.addTransaction(transaction);
  }
  
  render(){
		return (
      <div>
        <h1>Buy ShintoCoins</h1>
        <p>Current ShintoCoin Value: ${this.props.coinVal}</p>
        <p>Number of ShintoCoins Owned: {this.props.numCoins}</p>
        <Form action="Buy" onSubmit={this.addInput}></Form>
        </div>
		)
	}
}

export default Buy;
