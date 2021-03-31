import React from "react";
import CounterClassComponent from "./counter-class-component/CounterClassComponent";
import CounterFunctionalComponent from "./counter-functional-component/CounterFunctionalComponent";
import CounterImmerjs from "./counter-immerjs/CounterImmer";
import CounterRedux from "./counter-redux/CounterRedux";

export default function CounterComponent() {
  return (
    <div className="flex flex-col h-counter-flex-col">
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <CounterImmerjs />
      <CounterRedux />
    </div>
  );
}
