import { useCallback, useState, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const slowFunc = () => {
    let value=0;
    for(let i=0; i<1000000000; i++) {
      value++;
    }
    return value;
  }
  const value = useMemo(() => slowFunc(), []);
  console.log(value);

  const removePerson = useCallback((id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }, [people])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
