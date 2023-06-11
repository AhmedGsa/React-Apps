import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return <div>
    <button className="btn" onClick={() => {setToggle(!toggle)}}>Toggle</button>
    {toggle ? <ToggleComponent/> : (<div>Nothing</div>)}
  </div>;
};

const ToggleComponent = () => {
  useEffect(() => {
    console.log("inside use effect");
  },[])
  return <div>Some Component</div>
}

export default CleanupFunction;
