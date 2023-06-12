import Review from './components/Review';
import data from './data'
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0)
  const handlePrevious = () => {
    if(index!==0) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1)
    }
  }
  const handelNext = () => {
    if(index!==data.length - 1) {
      setIndex(index+1);
    } else {
      setIndex(0)
    }
  }
  const chooseRandomly = () => {
    const diff = data.length - 0;
    let random = Math.floor(Math.random() * diff);
    if(random == index) {
      random++;
    }
    setIndex(random)
  }
  return <main>
    <Review data={data[index]} previous={handlePrevious} next={handelNext} random={chooseRandomly}/>
  </main>;
};
export default App;
