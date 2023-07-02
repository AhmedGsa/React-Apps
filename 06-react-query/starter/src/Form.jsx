import { useState } from 'react';
import { useCreateTask } from './react-query-custom-hooks';

const Form = () => {
  const {createTask, isLoading, newItemName, setNewItemName} = useCreateTask()
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask()
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
