import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form.js'

class Mine extends Component {
	constructor(props) {
  		super(props); 	
      this.addInput = this.addInput.bind(this);   	
    }
  
    addInput(itemVal) {
      if(Number(itemVal)==8){
        const transaction = {type:"Mined", quantity:1, value:0}
        console.log(transaction); 
        this.props.addTransaction(transaction);
      }
    }

  render(){
		return (
      <div>
        <h1>Mine ShintoCoins</h1>
        <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>
        <p>What is the 7th Fibonacci sequence number?</p>
        <Form action="Mine" onSubmit={this.addInput}></Form>
        </div>
		)
	}
}

export default Mine;
