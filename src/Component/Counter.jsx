import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = (value) => {
    setCounter(counter + value);
  };
  const handleDouble = (value) => {
    setCounter(counter * value);
  };
  return (
    <>
      <Header title={"Counter"} />
      <Header title={counter} />
      <Button title={"Increament"} onClick={() => handleClick(1)} />
      <Button title={"Decreament"} onClick={() => handleClick(-1)} />
      <Button title={"Double"} onClick={() => handleDouble(2)} />
    </>
  );
};

export default Counter;
