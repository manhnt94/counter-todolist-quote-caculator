import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../../../constants/counterConstants";

export default function CounterRedux(props) {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrapper bg-white h-96 mb-12 lg:flex-0020 md:flex-0040 sm:flex-0060 xs:flex-0070 xsm:flex-0080 rounded-xl shadow-xl">
      <div className="counter-timer text-center">
        <span className="inline-block text-8xl text-normal py-20 tracking-widest">
          {count}
        </span>
      </div>
      <div className="counter-btn flex justify-around mb-6">
        <button
          className={`btn-counter text-5xl w-1/3 ${
            count === 0 && "disabled:opacity-50"
          }`}
          disabled={count === 0}
          onClick={() => dispatch({ type: DECREMENT_COUNTER })}
        >
          -
        </button>
        <button
          className="btn-counter text-5xl w-1/3"
          onClick={() => dispatch({ type: INCREMENT_COUNTER })}
        >
          +
        </button>
      </div>
      <div className="text-center pb-4">
        <span className="text-normal tracking-widest">
          Functional - Redux
        </span>
      </div>
    </div>
  );
}
