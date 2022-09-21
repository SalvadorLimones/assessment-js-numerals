import { useState } from "react";
import "./App.css";
import { convertNumber } from "./utilities/convertNumber";

function App() {
  const [num, setNum] = useState<number>(0);

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
        <span>{convertNumber(num)}</span>
      </div>
    </div>
  );
}

export default App;
