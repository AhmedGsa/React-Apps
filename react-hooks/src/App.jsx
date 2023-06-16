import Starter from './tutorial/05-leverage-javascript/starter/List'
import { people } from './data';

function App() {
  return (
    <div className='container'>
      <Starter people={people}/>
    </div>
  );
}

export default App;
