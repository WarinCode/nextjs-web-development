"use client";

import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState<number>(0);

  const handleClick = (): void => {
    setNumber(number + 1);
  };

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      Click {number}
    </button>
  );
};

export default Counter;
