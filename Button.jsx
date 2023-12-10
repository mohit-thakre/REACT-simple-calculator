import React from "react";

const Button = ({ arr, arr2, onButtonClick }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item) => (
          <button
            className="bg-blue-500 text-white p-2 rounded-full bg-opacity-70 hover:bg-opacity-80 focus:outline-none focus:ring focus:border-blue-300 shadow"
            key={item}
            onClick={() => onButtonClick(item)}
          >
            {item}
          </button>
        ))}
        {arr2.map((operator) => (
          <button
            className="bg-blue-500 text-white p-2 rounded-full bg-opacity-70 hover:bg-opacity-100 focus:outline-none focus:ring focus:border-blue-300 shadow"
            key={operator}
            onClick={() => onButtonClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
