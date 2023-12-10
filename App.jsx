import { useState } from "react";

import Calculator from "./component/Calculator";

function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let arr2 = ["+", "-", "*", "/", "=", "c", ".", "del"];
  return (
    <>
      <Calculator arr={arr} arr2={arr2}></Calculator>
    </>
  );
}

export default App;
