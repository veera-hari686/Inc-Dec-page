import React, { useState } from "react";
import "/src/styles.css";

function App() {
  const [val, setval] = useState(0);
  function handleClear() {
    setval(0);
  }
  function handleInc() {
    setval(val + 1);
  }
  function handleDec() {
    setval(val - 1);
  }
  return (
    <div className="container">
      <h1>{val}</h1>
      <div className="btn1">
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
      <div className="btn2">
        <button onClick={handleClear}>AC</button>
      </div>
    </div>
  );
}

export default App;
