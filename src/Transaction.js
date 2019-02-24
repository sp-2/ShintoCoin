import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class Transaction extends Component {
	constructor(props) {
      super(props);
  }

  render(){
    const listItems = this.props.transactions.map((itemString, index) => {
      return  <div key={index}>
                {itemString.type}  {itemString.quantity} ShintoCoin
              </div>
      });
    const index  = Number(this.props.match.params.name);
    const val = listItems[index];
		return (
      <div>
        <h1>Ledger Transaction Details</h1>
        <p>Detailed view of a transaction from the ledger.</p>
        <p>Transaction #{index+1}</p>
        {val}
      </div>
		)
	}
}

export default Transaction;
