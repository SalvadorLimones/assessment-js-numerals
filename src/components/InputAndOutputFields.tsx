import { useState } from "react";
import { convertNumberToArray } from "../utilities/convertNumberToArray";
import { replaceNumbersWithWords } from "../utilities/replaceNumbersWithWords";

const InputAndOutputFields = () => {
  const [num, setNum] = useState<number>(0);
  const [british, setBritish] = useState(false);
  const min = 0;
  const max = Number.MAX_SAFE_INTEGER;

  const handleChange = (value: string) => {
    value = value.replace(/\D/g, "");
    const validNum = Math.max(min, Math.min(max, Number(value)));
    setNum(validNum);
  };

  const convertNumber = (num: number): string =>
    replaceNumbersWithWords(convertNumberToArray(num, british));
  return (
    <>
      {" "}
      <div>
        <p>Input a number to convert:</p>
        <input
          type="text"
          value={num === 0 ? "input a number here" : num.toLocaleString("en")}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
      {num !== 0 && (
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
      )}
    </>
  );
};

export default InputAndOutputFields;
