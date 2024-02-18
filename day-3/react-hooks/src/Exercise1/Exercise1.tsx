import React, { useState } from "react";

const Exercise1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleMultiplyByTen = () => {
    setCount(count * 10);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleMultiplyByTen}>Multiply by 10</button>
    </div>
  );
};

export default Exercise1;
