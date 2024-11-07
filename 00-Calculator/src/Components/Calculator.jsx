import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult(error);
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl shadow-md">
      <div className="flex flex-col">
        <div className="text-3xl font-bold text-right mb-4">{expression}</div>
        <div className="text-3xl font-bold text-right mb-8">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4"
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4"
          onClick={() => handleButtonClick("=")}
        >
          =
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-4 col-span-4"
          onClick={() => handleButtonClick("C")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
