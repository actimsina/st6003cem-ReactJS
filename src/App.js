import { useState } from "react";
import Feedback from "./components/Feedback";

function App() {

  const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000)

  const handleClick = () => setCounter(counter + 1)

  const handleReset = () => setCounter(0)

  console.log(`rendering ${counter} `)

  return (
    <>
      <h2> {counter}</h2>
      <button onClick={handleClick}>
        Plus
      </button>
      <button onClick={handleReset}>
        Reset
      </button>

      <Feedback />
    </>
  );
}

export default App;
