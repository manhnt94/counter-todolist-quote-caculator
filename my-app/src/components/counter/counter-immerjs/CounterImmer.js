import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER_IMMERJS,
  INCREMENT_COUNTER_IMMERJS,
} from "../../../constants/counterConstants";

export default function CounterImmerjs(props) {
  const { count } = useSelector((state) => state.counterImmerjs);
  const dispatch = useDispatch();

  return (
    <div className="flex h-full justify-center items-center">
      <p className="w-80">Counter ImmerJS</p>
      <button
        className={`btn-counter rounded-l-lg ${count === 0 && "disabled:opacity-50"}`}
        disabled={count === 0}
        onClick={() => dispatch({ type: DECREMENT_COUNTER_IMMERJS })}
      >
        -
      </button>
      <label className="w-12 text-center inline-block py-2 bg-pink-300">
        {count}
      </label>
      <button
        className="btn-counter rounded-r-lg"
        onClick={() => dispatch({ type: INCREMENT_COUNTER_IMMERJS })}
      >
        +
      </button>
    </div>
  );
}
