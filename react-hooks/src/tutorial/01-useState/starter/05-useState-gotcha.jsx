import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClickBtn = () => {
    setTimeout(() => {
      setCount((currentCount) => {
      return currentCount+1
      });
    }, 3000)
  }
  return <div>
    <h1>{count}</h1>
    <button className="btn" onClick={handleClickBtn} >Increment</button>
  </div>;
};

export default UseStateGotcha;
