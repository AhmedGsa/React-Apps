import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customAxios from './utils';
const Items = ({ items }) => {
  const {isLoading, error, data} = useQuery({
    queryKey: ["items"],
    queryFn: () => customAxios.get("/ad")
  })
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
