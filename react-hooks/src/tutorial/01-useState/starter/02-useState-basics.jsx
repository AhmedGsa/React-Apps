import { useState } from "react";

const UseStateBasics = () => {
  let [count, setCount] = useState(0);
  const handleClickBtn = () => {
    setCount(count + 1)
  }
  return <div>
    <h2>{count}</h2>
    <button onClick={handleClickBtn} className="btn" >Increment</button>
  </div>;
};

export default UseStateBasics;
