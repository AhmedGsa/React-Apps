import { Colors } from './Colors';
import { useState } from "react";
import Values from "values.js";
import {ToastContainer, toast} from 'react-toastify'

const App = () => {
  const [color, setColor] = useState("#f15025");
  const startValues = new Values("#f15025").all(10);
  const [values, setValues] = useState(startValues);
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newValues = new Values(color).all(10);
      setValues(newValues)
    } catch (error) {
      toast.error("please provide correct color code !")
    }
  };
  return (
    <>
      <div className="container">
        <h4>Color Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
          ></input>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={handleColorChange}
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <Colors values={values}/>
      <ToastContainer/>
    </>
  );
};
export default App;
