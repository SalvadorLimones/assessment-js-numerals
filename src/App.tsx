import "./App.css";
import InputAndOutputFields from "./components/inputAndOutputFields";

function App() {
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
      <InputAndOutputFields />
    </div>
  );
}

export default App;
