import "./App.css";
import { useEffect } from "react";
import Counter, { useCounter } from "./Counter";

function App(props) {
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

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: props.initialValue,
//     };
//   }
//
//   increment = () => {
//     this.setState(() => {
//       return {
//         counter: this.state.counter + 1,
//       };
//     });
//     console.log("increment", this.state.counter);
//   };
//
//   decrement = () => {
//     const counter = this.state.counter;
//     this.setState({
//       counter: counter - 1,
//     });
//     console.log("decrement", this.state.counter);
//   };
//
//   render() {
//     return (
//       <div>
//         <Counter
//           increment={this.increment}
//           decrement={this.decrement}
//           value={this.state.counter}
//         />
//         <Counter
//           increment={this.increment}
//           decrement={this.decrement}
//           value={this.state.counter}
//         />
//         <Counter
//           increment={this.increment}
//           decrement={this.decrement}
//           value={this.state.counter}
//         />
//       </div>
//     );
//   }
// }

export default App;
