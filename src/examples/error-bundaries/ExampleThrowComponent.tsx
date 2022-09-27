import React, { useState } from "react";

export default function ExampleThrowComponent() {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("count is greater than 5");
  }
  return <h1 onClick={() => setCount(count + 1)}>{count}</h1>;
}
