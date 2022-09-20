import { useState, useEffect } from "react";
import "./App.css";
import { convertNumberToArray } from "./utilities/convertNumberToArray";

function App() {
  const [num, setNum] = useState<number>(0);
  /*   useEffect(() => {
    convertNumberToArray(num);
  }, [num]); */
  return (
    <div className="App">
      <h1>Hi!</h1>
      <label>Number to convert:</label>
      <input
        type="number"
        name="number"
        placeholder="please input a valid number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <div>
        <span>{convertNumberToArray(num)}</span>
      </div>
    </div>
  );
}

export default App;
