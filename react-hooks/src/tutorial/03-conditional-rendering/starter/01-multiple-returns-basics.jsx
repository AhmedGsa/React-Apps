import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  })
  if(isLoading) {
    return <h2>Loading ...</h2>
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
