import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let amount = Number(this.state.amount);

    let euro = amount / 80;

    alert(
      `Converting to ${this.state.currency} Amount is ${euro}`
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>

          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Currency: </label>

          <textarea
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;