import React from "react";
import "./App.css";
import react, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="abc">
        <h1>{count}</h1>
        <button onClick={IncNum}>Click me</button>
      </div>
    </>
  );
};
export default App;
