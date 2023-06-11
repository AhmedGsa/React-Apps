import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(true)
  const handleClickBtn = () => {
    setValue(!value);
  }
  return <div>
    <h2>Toggle Challenge</h2>
    {value ? <SomeComponent value="On" /> : <SomeComponent value="Off" />}
    <button className="btn" onClick={handleClickBtn}>Turn {value ? "Off" : "On"}</button>
  </div>;
};

const SomeComponent = (props) => {
  const {value} = props;
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default ToggleChallenge;
