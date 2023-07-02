import SingleItem from './SingleItem';
import { useFetchTasks } from './react-query-custom-hooks';

const Items = () => {
  const {isLoading, error, data} = useFetchTasks()
  if(isLoading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>{error.response.data}</p>
  }
  return (
    <div className='items'>
      {data?.data?.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
