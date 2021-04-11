import React, { useEffect, useState } from "react";
import { SIGNATURE } from "../../constants/common";
import Loading from "../loading/Loading";
import MyFooter from "../my-footer/MyFooter";
import Title from "../title/Title";
import CounterClassComponent from "./counter-class-component/CounterClassComponent";
import CounterFunctionalComponent from "./counter-functional-component/CounterFunctionalComponent";
import CounterImmerjs from "./counter-immerjs/CounterImmer";
import CounterRedux from "./counter-redux/CounterRedux";

export default function CounterComponent() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-pink-400 h-full lg:h-screen">
          <Title title={"My Counter"} />
          <div className="flex justify-around items-center flex-wrap">
            <CounterClassComponent />
            <CounterFunctionalComponent />
            <CounterImmerjs />
            <CounterRedux />
          </div>
          <MyFooter
            styles={"text-white"}
            information={"Disable button '---' when value is zero"}
            description={
              "Class Component, Functional Component, Redux, ImmerJS"
            }
            signature={SIGNATURE}
          />
        </div>
      )}
    </>
  );
}
