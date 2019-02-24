import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Home from "./Home.js";
import Sell from "./Sell.js"
import Buy from "./Buy.js"
import Mine from "./Mine.js";
import Ledger from "./Ledger.js";
import Transaction from "./Transaction.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsList: [],
      coinVal: 1,
      numCoins:0
    }
    this.handleTransaction = this.handleTransaction.bind(this);
}

handleTransaction(transaction) {
  const transactionType = transaction.type;
  var coinVal = this.state.coinVal;
  var numCoins = this.state.numCoins;
  const val = Number(transaction.quantity);
  switch (transactionType)
    {
        case "Bought": {
          coinVal+=val;
          numCoins+=val;
          break;
        }
        case "Sold": {
          if(transaction.quantity*coinVal < numCoins*coinVal){
            coinVal-=val;
            numCoins-=val;
          }else{return;}
          break;
        }
        case "Mined": {
          coinVal+=val;
          numCoins+=val;
          break;
        }
        default: ;
    }
  transaction.value = coinVal;
  console.log(transaction);
  var transactionsList = this.state.transactionsList;
  transactionsList = transactionsList.concat(transaction);
  this.setState({coinVal, transactionsList, numCoins});
  console.log(this.state.transactionsList);
}

  render(){
    return (
      <BrowserRouter>
      <div>
          <div>
              <Link to="/home">Home</Link>
              <Link to="/mine">Mine Coins</Link>
              <li><Link to="/buy">Buy Coins</Link></li>
              <li><Link to="/sell">Sell Coins</Link></li>
              <li><Link to="/ledger">Browse Ledger</Link></li>
              <hr/>
          </div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route
              path='/mine'
              render={(props) => <Mine {...props} addTransaction={this.handleTransaction} />}
            />
            <Route
              path='/buy'
              render={(props) => <Buy {...props} addTransaction={this.handleTransaction} coinVal={this.state.coinVal} numCoins={this.state.numCoins}/>}
            />
            <Route
              path='/sell'
              render={(props) => <Sell {...props} addTransaction={this.handleTransaction} coinVal={this.state.coinVal} numCoins={this.state.numCoins}/>}
            />
            <Route
              path='/ledger'
              render={(props) => <Ledger {...props} transactions={this.state.transactionsList} />}
            />
            <Route
              path='/transactions/:name'
              render={(props) => <Transaction {...props} transactions={this.state.transactionsList} />}
            />
          </div>
  </BrowserRouter>
    )
}

}

export default App;
