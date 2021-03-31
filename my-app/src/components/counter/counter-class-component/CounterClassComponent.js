import React, { Component } from "react";

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleCounter = (type) => {
    if (type === "add") {
      this.setState((prev) => ({
        counter: prev.counter + 1,
      }));
    } else {
      this.setState((prev) => ({
        counter: prev.counter - 1,
      }));
    }
  };

  render() {
    return (
      <div className="flex h-full justify-center items-center">
        <p className="w-80">Counter Class Component</p>
        <button
          className={`btn-counter rounded-l-lg ${
            this.state.counter === 0 && "disabled:opacity-50"
          }`}
          disabled={this.state.counter === 0}
          onClick={() => this.handleCounter("sub")}
        >
          -
        </button>
        <label className="w-12 text-center inline-block py-2 bg-pink-300">
          {this.state.counter}
        </label>
        <button
          className="btn-counter rounded-r-lg"
          onClick={() => this.handleCounter("add")}
        >
          +
        </button>
      </div>
    );
  }
}
