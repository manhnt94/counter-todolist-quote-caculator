import React from "react";

export default function Button(props) {
  return (
    <div className="w-full cal-bg shadow-2xl rounded-b-xl">
      <div className="p-3 text-white grid grid-cols-4 gap-4">
        <button className="btn gray p-2 rounded-xl focus:outline-none col-span-2">
          AC
        </button>
        <button className="btn pink p-2 rounded-xl focus:outline-none">
          &divide;
        </button>

        <button className="btn pink p-2 rounded-xl focus:outline-none">
          X
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          7
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          8
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          9
        </button>

        <button className="btn pink p-2 rounded-xl focus:outline-none">
          -
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          4
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          5
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          6
        </button>

        <button className="btn pink p-2 rounded-xl focus:outline-none">
          +
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          1
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          2
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          3
        </button>
        <button className="btn orange p-2 rounded-xl focus:outline-none row-span-2">
          =
        </button>

        <button className="col-span-2 btn black p-2 rounded-xl focus:outline-none">
          0
        </button>
        <button className="btn black p-2 rounded-xl focus:outline-none">
          .
        </button>
      </div>
    </div>
  );
}
