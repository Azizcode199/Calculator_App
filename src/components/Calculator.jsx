import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearResult = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString()); 
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-black p-4 rounded-lg shadow-lg text-center text-white">
        {/* Display */}
        <input
          type="text"
          value={result}
          readOnly
          className="text-black rounded-lg w-full h-20 p-2 shadow-inner bg-gray-300 outline-none text-right text-2xl"
          placeholder="0"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-5">
          {/* Erste Zeile */}
          <button onClick={clearResult} className="col-span-2 p-4 bg-red-500 text-white rounded">
            C
          </button>
          <button onClick={handleClick} value="<" className="p-4 bg-gray-500 text-white rounded">
            {'<'}
          </button>
          <button onClick={handleClick} value="/" className="p-4 bg-gray-500 text-white rounded">
            /
          </button>

          {/* Zahlenbereich */}
          <div className="col-span-3 grid grid-cols-3 gap-2">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0,  ".", "00"].map((num, index) => (
              <button
                key={index}
                onClick={handleClick}
                value={num}
                className="p-4 bg-gray-300 text-black rounded"
              >
                {num}
              </button>
            ))}
          </div>
          
          {/* Operatoren */}
          <div className="flex flex-col gap-2">
          <button onClick={handleClick} value="*" className="p-4 bg-cyan-400 text-black rounded">
              *
            </button>
            <button onClick={handleClick} value="-" className="p-4 bg-violet-600 text-white font-bold rounded">
              -
            </button>
            <button onClick={handleClick} value="+" className="p-4 bg-indigo-600 text-white rounded">
              +
            </button>
            <button
              onClick={calculate}
              className="p-8 bg-green-500 text-white rounded flex-1 text-lg font-bold"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
