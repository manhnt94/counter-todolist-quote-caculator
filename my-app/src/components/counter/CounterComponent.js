import React from "react";
import CounterClassComponent from "./counter-class-component/CounterClassComponent";
import CounterFunctionalComponent from "./counter-functional-component/CounterFunctionalComponent";
import CounterImmerjs from "./counter-immerjs/CounterImmer";
import CounterRedux from "./counter-redux/CounterRedux";

export default function CounterComponent() {
  return (
    <div className="bg-pink-400 h-full lg:h-screen">
      <div className="section-title pt-16 mb-24">
        <h2 className="text-normal tracking-widest text-3xl text-center mb-2">
          My Counter
        </h2>
        <div className="w-24 h-1.5 bg-react m-auto"></div>
      </div>
      <div className="flex justify-around items-center flex-wrap">
        <CounterClassComponent />
        <CounterFunctionalComponent />
        <CounterImmerjs />
        <CounterRedux />
      </div>
    </div>
  );
}
