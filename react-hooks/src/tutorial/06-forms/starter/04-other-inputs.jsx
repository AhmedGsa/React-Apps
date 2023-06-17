import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [freeShipping, setFreeShipping] = useState(false)
  const [framework, setFramework] = useState("react")
  const handleCheckboxChange = (e) => {
    setFreeShipping(e.target.checked)
  }
  const handleSelectChange = (e) => {
    setFramework(e.target.value)
  }
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' id='shipping' checked={freeShipping} onChange={handleCheckboxChange}></input>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select defaultValue="react" onChange={handleSelectChange}>
            {frameworks.map((framework) => <option key={framework} value={framework} >{framework}</option>)}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
