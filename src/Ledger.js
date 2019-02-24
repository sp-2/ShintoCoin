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
import Transaction from "./Transaction.js";
import {withRouter} from "react-router-dom";

class Ledger extends Component {
	constructor(props) {
      super(props); 	
      this.handleClick = this.handleClick.bind(this);   
  }

  handleClick = (index,e) => {
    e.preventDefault()
    this.props.history.push("/transactions/"+index);
    //this.props.router.replace("/transactions/"+index);
}
  render(){
    const listItems = this.props.transactions.map((itemString, index) => {
      return  <div key={index}>                 
                {itemString.type}  {itemString.quantity} {itemString.value}
                <button onClick={(e) => this.handleClick(index, e)}type="button">Details</button>              
              </div>   
      });
		return (
      <div>
        <h1>Browse the Ledger</h1>
        <p>Here you can browse all ShintoCoin transactions.</p>
        <p>Shinto Coin Ledger</p>
        <p>Action  Amount  Value</p>
        {listItems}
      </div>
		)
	}
}

export default withRouter(Ledger);
