import React, { useState } from "react";
import Button from "./Button";

const Calculator = ({ arr, arr2 }) => {
  const [value, setValue] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setValue("");
    } else if (buttonText === "=") {
      let result = eval(value);
      setValue(result.toString());
    } else if (buttonText === "del") {
      setValue(value.slice(0, -1));
    } else {
      const newValue = value + buttonText;
      setValue(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 text-4xl font-bold text-gray-300 rounded-lg shadow-md mb-8">
        <h1 className="text-blue-600 mb-4">Simple Calculator</h1>
        <div className="mb-4">
          <input
            className="text-black py-2 px-4 border border-gray-300 rounded-md w-60 bg-gray-300"
            type="text"
            placeholder="Enter"
            readOnly
            value={value}
          />
        </div>
        <Button onButtonClick={handleButtonClick} arr={arr} arr2={arr2} />
      </div>
    </div>
  );
};

export default Calculator;
