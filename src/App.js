import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";

import store from './store';

import "./App.css";
import updateBalance from "./actions";

class App extends Component {
  //  state = {
  //     username: "Janny",
  //     totalAmount: 2500701
  // };
  render() {
    const { username, totalAmount } = store.getState();
    return (
      <div className="App">

        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
      
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000"
                  onClick={withdraw}>
              WITHDRAW $10,000
          </button>
          <button data-amount="5000"
                  onClick={withdraw}>
              WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function withdraw(event) {
    const deductAmount = event.target.dataset.amount;
    const totalAmount = store.getState().totalAmount;
    store.dispatch(updateBalance(deductAmount, totalAmount));
}

export default App;
