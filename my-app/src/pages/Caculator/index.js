import React, { useState } from "react";
import "./styles.css";
import { evaluate } from "mathjs";
import Button from "./Button/Button";
import Title from "../../components/title/Title";
import MyFooter from "../../components/my-footer/MyFooter";
import { SIGNATURE } from "../../constants/common";

export default function Caculator(props) {
  const [caculator, setCaculator] = useState({
    result: "0",
    prevResult: "0",
    formula: "",
    currentSign: "pos",
    lastClicked: "",
    evaluated: false,
  });

  // Regex
  const endWithOperator = /[x/+-]$/; // (9-) -> true, (-9) -> false

  const endWithNegativeSign = /\d[x+/-]{1}-$/; // Digit - operator - end with negative sign: (9x-) -> true, (9-x) => false
  const isOperator = /[x/+-]/; // '(9+9+9)' => true: if have operator, (999) => false
  const anOperator = /^[*/+-]$/g; // Check have only one operator: (9+9) => true, (9+9+9) => false
  const matchOnlyZero = /([^.0-9]0|^0)$/; // +0, 0...

  // const isCaculation = (formula) => {
  //   return anOperator.test(formula);
  // };

  // const isNumberic = (val) => {
  //   if (typeof value != "string") return false;
  //   return !isNaN(val) && !isNaN(parseFloat(val));
  // };

  // Handle AC button
  const handleAllClear = (e) => {
    setCaculator({
      ...caculator,
      result: "0",
      prevResult: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: "",
      evaluated: false,
    });
  };

  const maxDigitMessage = () => {
    setCaculator((prevState) => ({
      ...prevState,
      result: "DIGIT LIMIT MET",
      prevResult: prevState.result,
    }));

    setTimeout(() => {
      setCaculator((prevState) => ({
        ...caculator,
        result: prevState.prevResult,
      }));
    }, 1000);
  };

  const handleNumbers = (e) => {
    // Check result is not limit digit
    if (!caculator.result.includes("LIMIT")) {
      const { result, formula, evaluated } = caculator;
      const value = e.target.value;

      console.log(caculator);

      setCaculator((prevState) => ({
        ...prevState,
        evaluated: false,
      }));

      console.log(evaluated);
      if (result.length > 21) {
        maxDigitMessage();
      } else if (evaluated) {
        setCaculator((prevState) => ({
          ...prevState,
          result: value,
          formula: value !== "0" ? value : "",
        }));
      } else {
        setCaculator((prevState) => ({
          ...prevState,
          result:
            result === "0" || isOperator.test(result) ? value : result + value, // res:0 || + (op) -> click: 8 => 8
          formula:
            result === "0" && value === "0"
              ? formula === ""
                ? value // res: 0 -> click: 0 => 0
                : formula // res: 0, formula 9 + 0 -> click -  9 + 0
              : matchOnlyZero.test(formula)
              ? formula.slice(0, -1) + value // formular: +0 -> click: 9 => +9
              : formula + value, // formular: 9 -> click: 9 => 99
        }));
      }
    }
  };

  const handleDecimal = (e) => {
    // result: 99 -> click: . -> 99.
    // result: 99 -> click: = -> click: . => 0.
    if (caculator.evaluated) {
      console.log("ok");
      setCaculator((prevState) => ({
        ...prevState,
        result: "0.",
        formula: "0.",
        evaluated: false,
      }));
    } else if (
      !caculator.result.includes(".") &&
      !caculator.result.includes("LIMIT")
    ) {
      console.log("else if");
      setCaculator({
        ...caculator,
        evaluated: false,
      });

      if (caculator.result.length > 21) {
        maxDigitMessage();
      } else if (
        endWithOperator.test(caculator.formula) ||
        (caculator.result === "0" && caculator.formula === "")
      ) {
        console.log("endWith");
        setCaculator({
          ...caculator,
          result: "0.",
          formula: caculator.formula + "0.", // formular: 99+ -> click: . => 99 + 0.
        });
      } else {
        console.log("else");
        setCaculator({
          ...caculator,
          result: caculator.formula.match(/(-?\d+)$/)[0] + ".",
          formula: caculator.formula + ".",
        });
      }
    }
  };

  const handleOperators = (e) => {
    if (!caculator.result.includes("LIMIT")) {
      const value = e.target.value;
      const { formula, prevResult, evaluated } = caculator;

      setCaculator({
        ...caculator,
        result: value,
        evaluated: false,
      });

      if (evaluated) {
        setCaculator((prevState) => ({
          ...prevState,
          formula: prevResult + value, // formula: 9 + 9 = 18 -> click - => 18-
        }));
      }
      // Click 9+
      else if (!endWithOperator.test(formula)) {
        setCaculator((prevState) => ({
          ...prevState,
          prevResult: formula,
          formula: formula + value,
        }));
      } else if (!endWithNegativeSign.test(formula)) {
        setCaculator((prevState) => ({
          ...prevState,
          formula:
            (endWithNegativeSign.test(formula + value) ? formula : prevResult) +
            value,
        }));
      } else if (value !== "-") {
        setCaculator((prevState) => ({
          ...prevState,
          formula: prevResult + value,
        }));
      }
    }
  };

  const handleEvaluate = (e) => {
    if (!caculator.result.includes("Limit")) {
      let expression = caculator.formula;

      // Check formular like /9, x9
      if (
        caculator.formula.charAt(0) === "x" ||
        caculator.formula.charAt(0) === "/"
      ) {
        return;
      }

      if (endWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }

      expression = expression
        .replace(/x/g, "*")
        .replace(/‑/g, "-")
        .replace("--", "+0+0+"); // Replace to revert above
      let answer =
        Math.round(Math.pow(10, 12) * evaluate(expression)) / Math.pow(10, 12);
      setCaculator({
        result: answer.toString(),
        formula:
          expression
            .replace(/\*/g, "⋅")
            .replace(/-/g, "‑")
            .replace("+0+0+", "+") // +0+0+ iss "--" above then display like "+"
            .replace(/(x|\/|\+)‑/, "$1-")
            .replace(/^‑/, "-") +
          "=" +
          answer,
        prevResult: answer,
        evaluated: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-red-200">
      <Title title="My Caculator" />
      <div className="flex justify-center items-center">
        <div className="caculator cal-bg w-80 rounded-xl shadow-xl">
          <div className="p-5">
            <div className="screen shadow-inner text-right pr-2 border-2 border-gray-900 shadow-2xl">
              <div className="formula text-black h-6">{caculator.formula}</div>
              <div className="output text-white h-6">{caculator.result}</div>
            </div>
          </div>
          <Button
            handleAllClear={handleAllClear}
            handleNumbers={handleNumbers}
            handleDecimal={handleDecimal}
            handleEvaluate={handleEvaluate}
            handleOperators={handleOperators}
          />
        </div>
      </div>
      <MyFooter styles="text-blue-600" signature={SIGNATURE} />
    </div>
  );
}
