import { useState } from "react";
import Increment from "./Increment";

const Counter = () => {
  const [count, setCount] = useState(0);
  // Increment function
  const incrementCount = () => setCount(count + 1);

  // Decrement function with condition
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-blue-600 p-6">
      <h1 className="bg-amber-50 shadow p-3 mb-4">
        <span className="text-red-500">Increment</span> &{" "}
        <span className="text-green-500">Decrement</span> Counter App
      </h1>
      <h1 className="w-fit h-18 items-center mx-auto p-1.5 text-white bg-amber-950 mb-1 mt-1.5 cursor-pointer">
        Count in Parent: {count}
      </h1>

      <button
        className="bg-amber-300 p-1 rounded-md mb-1.5"
        onClick={incrementCount}
      >
        Increment  Parent(+)
      </button>
      <Increment
        count={count}
        onCountIncrement={incrementCount}
        onCountDecrement={Decrement}
      />
    </div>
  );
};

export default Counter;
