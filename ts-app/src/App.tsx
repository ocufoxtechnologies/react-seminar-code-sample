import React, { useEffect } from 'react';
import './App.css';
import Counter, {useCounter} from "./Counter";

interface AppProps{
  initialValue: number
}

function App(props: AppProps) {
  const counter1 = useCounter(props.initialValue);
  const counter2 = useCounter(props.initialValue);
  const counter3 = useCounter(props.initialValue);

  useEffect(() => {
    console.log(counter1.value);
  });

  return (
    <div className="App">
      <Counter {...counter1} />
      <Counter {...counter2} />
      <Counter {...counter3} />
    </div>
  );
}

export default App;
