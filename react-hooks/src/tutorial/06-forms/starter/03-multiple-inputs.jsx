import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleNameChange = (e) => {
    setUser({...user, name: e.target.value})
  }
  const handleEmailChange = (e) => {
    setUser({...user, email: e.target.value})
  }
  const handlePasswordChange = (e) => {
    setUser({...user, password: e.target.value})
  }
  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={handleNameChange} value={user.name} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' onChange={handleEmailChange} value={user.email} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' onChange={handlePasswordChange} value={user.password} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
