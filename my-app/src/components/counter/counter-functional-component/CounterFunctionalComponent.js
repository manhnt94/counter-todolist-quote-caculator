import React, { useState } from "react";

export default function CounterFunctionalComponent(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-wrapper bg-white h-96 mb-12 lg:flex-0020 md:flex-0040 sm:flex-0060 xs:flex-0070 xsm:flex-0080 rounded-xl shadow-xl">
      <div className="counter-timer text-center">
        <span className="inline-block text-8xl text-normal py-20 tracking-widest">
          {counter}
        </span>
      </div>
      <div className="counter-btn flex justify-around mb-6">
        <button
          className={`btn-counter text-5xl w-1/3 ${
            counter === 0 && "disabled:opacity-50"
          }`}
          disabled={counter === 0}
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          className="btn-counter text-5xl w-1/3"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <div className="text-center pb-4">
        <span className="text-normal tracking-widest">
          Functional Component
        </span>
      </div>
    </div>
  );
}
