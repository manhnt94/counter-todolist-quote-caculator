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
      <div className="counter-wrapper bg-white h-96 mb-12 lg:flex-0020 md:flex-0040 sm:flex-0060 xs:flex-0070 xsm:flex-0080 rounded-xl shadow-xl">
        <div className="counter-timer text-center">
          <span className="inline-block text-8xl text-normal py-20 tracking-widest">
            {this.state.counter}
          </span>
        </div>
        <div className="counter-btn flex justify-around mb-6">
          <button
            className={`btn-counter text-5xl w-1/3 ${
              this.state.counter === 0 && "disabled:opacity-50"
            }`}
            disabled={this.state.counter === 0}
            onClick={() => this.handleCounter("sub")}
          >
            -
          </button>
          <button
            className="btn-counter text-5xl w-1/3"
            onClick={() => this.handleCounter("add")}
          >
            +
          </button>
        </div>
        <div className="text-center">
          <span className="text-normal tracking-widest">
            Class Component
          </span>
        </div>
      </div>
    );
  }
}
