import React, { useState } from "react";

export default function CounterFunctionalComponent(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex h-full justify-center items-center">
      <p className="w-80">Counter Functional Component</p>
      <button
        className={`btn-counter rounded-l-lg ${counter === 0 && "disabled:opacity-50"}`}
        disabled={counter === 0}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <label className="w-12 text-center inline-block py-2 bg-pink-300">
        {counter}
      </label>
      <button
        className="btn-counter rounded-r-lg"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
}
