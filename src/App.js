import React, {useState} from "react";


function App() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState();

  const handleInput1Change = (e) => {
    setInput1(Number(e.target.value));
  };

  const handleInput2Change = (e) => {
    setInput2(Number(e.target.value));
  };

  const handlePlus = () => {
    setResult(input1 + input2);
  };

  const handleMinus = () => {
    setResult(input1 - input2);
  };

  const handleMultiply = () => {
    setResult(input1 * input2);
  };

  const handleDivide = () => {
    if (input2 !== 0) {
      setResult(input1 / input2);
    } else {
      alert("Are you dumb? You can't divide by zero");
    }
  };

  const handleReset = () => {
    setInput1(0);
    setInput2(0);
    setResult(0);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <label>
        Input 1:
        <input type="number" value={input1} onChange={handleInput1Change} />
      </label>
      <label>
        Input 2:
        <input type="number" value={input2} onChange={handleInput2Change} />
      </label>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;