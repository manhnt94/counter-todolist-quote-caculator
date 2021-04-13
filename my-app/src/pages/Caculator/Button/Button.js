import React from "react";

export default function Button(props) {
  const {
    handleAllClear,
    handleNumbers,
    handleDecimal,
    handleOperators,
    handleEvaluate,
  } = props;

  return (
    <div className="w-full cal-bg shadow-2xl rounded-b-xl">
      <div className="p-5 text-white grid grid-cols-4 gap-4">
        <button
          className="btn gray p-2 rounded-xl focus:outline-none col-span-2"
          value="AC"
          onClick={handleAllClear}
        >
          AC
        </button>
        <button
          className="btn pink p-2 rounded-xl focus:outline-none"
          value="/"
          onClick={handleOperators}
        >
          /
        </button>

        <button
          className="btn pink p-2 rounded-xl focus:outline-none"
          value="x"
          onClick={handleOperators}
        >
          X
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="7"
          onClick={handleNumbers}
        >
          7
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="8"
          onClick={handleNumbers}
        >
          8
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="9"
          onClick={handleNumbers}
        >
          9
        </button>

        <button
          className="btn pink p-2 rounded-xl focus:outline-none"
          value="-"
          onClick={handleOperators}
        >
          -
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="4"
          onClick={handleNumbers}
        >
          4
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="5"
          onClick={handleNumbers}
        >
          5
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="6"
          onClick={handleNumbers}
        >
          6
        </button>

        <button
          className="btn pink p-2 rounded-xl focus:outline-none"
          value="+"
          onClick={handleOperators}
        >
          +
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="1"
          onClick={handleNumbers}
        >
          1
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="2"
          onClick={handleNumbers}
        >
          2
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="3"
          onClick={handleNumbers}
        >
          3
        </button>
        <button
          className="btn orange p-2 rounded-xl focus:outline-none row-span-2"
          value="="
          onClick={handleEvaluate}
        >
          =
        </button>
        <button
          className="col-span-2 btn black p-2 rounded-xl focus:outline-none"
          value="0"
          onClick={handleNumbers}
        >
          0
        </button>
        <button
          className="btn black p-2 rounded-xl focus:outline-none"
          value="."
          onClick={handleDecimal}
        >
          .
        </button>
      </div>
    </div>
  );
}
