import { useGlobalContext } from './Context';
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar';

const App = () => {
  const {isModalOpen, isSidebarOpen} = useGlobalContext()
  return <div>
    <Home/>
    {isModalOpen && <Modal/>}
    <Sidebar/>
  </div>;
};
export default App;
