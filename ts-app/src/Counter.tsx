import { useState } from "react";

interface CounterProps{
  decrement: Function;
  increment: Function;
  value: number;
}

export default function Counter(props:CounterProps) {
  return (
    <div className="App">
      <button onClick={() => props.decrement()}> -1 </button>
      <p className="hello-world"> {props.value} </p>
      <button onClick={() => props.increment()}> +1 </button>
    </div>
  );
}

export const useCounter = (initialValue :number) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return { value, increment, decrement };
};
