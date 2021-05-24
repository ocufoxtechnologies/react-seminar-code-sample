import { useState } from "react";

export default function Counter(props) {
  return (
    <div className="App">
      <button onClick={props.decrement}> -1 </button>
      <p className="hello-world"> {props.value} </p>
      <button onClick={props.increment}> +1 </button>
    </div>
  );
}

export const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return { value, increment, decrement };
};
