import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import customAxios from './utils';
import { toast } from 'react-toastify';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const queryClient = useQueryClient()
  const {mutate: createTask, isLoading, error} = useMutation({
    mutationFn: () => customAxios.post("/", {title: newItemName}),
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["tasks"]})
      toast.success("Task added successfully !")
      setNewItemName("")
    }
  })
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
