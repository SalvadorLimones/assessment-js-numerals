import { useState } from "react";
import "./App.css";
import { convertNumberToArray } from "./utilities/convertNumberToArray";
import { replaceNumbersWithWords } from "./utilities/replaceNumbersWithWords";

function App() {
  const [num, setNum] = useState<number>(0);
  const [british, setBritish] = useState(false);
  const min = 0;
  const max = Number.MAX_SAFE_INTEGER;

  const handleChange = (value: string) => {
    const validNum = Math.max(min, Math.min(max, Number(value)));
    setNum(validNum);
  };

  const convertNumber = (num: number): string =>
    replaceNumbersWithWords(convertNumberToArray(num, british));

  return (
    <div className="App">
      <h1>Arabic number conversion tool</h1>
      <div>
        <p>
          Hi, welcome to my numbers-to-words conversion tool, which takes a
          numeric input and converts it into the English phrase of that number
        </p>
        <p>
          The tool can cope with positive numbers up to the value of the maximum
          safe integer in JavaScript, equal to 2 to the 53rd power. Nosy to find
          out how it looks as an English phrase? Copy this value into the input
          field: 9007199254740991
        </p>
      </div>
      <div>
        <p>Input a number to convert:</p>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>

      <div>
        <p>The converted value is:</p>
        <div className="converted">{convertNumber(num)}</div>
        <button
          disabled={num < 1000 || num > 1999}
          onClick={() => setBritish(!british)}
        >
          toggle UK counting
        </button>
      </div>
    </div>
  );
}

export default App;
