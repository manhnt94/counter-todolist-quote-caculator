import React from "react";
import "./styles.css";
import Button from "./Button/Button";
import Title from "../../components/title/Title";
import MyFooter from "../../components/my-footer/MyFooter";
import { SIGNATURE } from "../../constants/common";

export default function Caculator(props) {
  return (
    <div className="min-h-screen bg-gray-200 ">
      <Title title="My Caculator" />
      <div className="flex justify-center items-center">
        <div className="caculator cal-bg w-80 rounded-xl">
          <div className="p-3">
            <div className="screen shadow-inner text-right pr-2 border-2 border-gray-900 shadow-2xl">
              <div className="formula text-black">1+1</div>
              <div className="output text-white">3</div>
            </div>
          </div>
          <Button />
        </div>
      </div>
      <MyFooter
            styles="text-blue-600"
            signature={SIGNATURE}
          />
    </div>
  );
}
