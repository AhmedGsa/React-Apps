const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const handleRefreshBtn = () => {
    fetchTours()
  }
  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main className="">
        <h1>Our Tours</h1>
        <Loading/>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="">
        <h1>No Tours left</h1>
        <button className="btn" onClick={handleRefreshBtn}>Refresh</button>
      </main>
    );
  }
  return (
    <main className="">
      <h1>Our Tours</h1>
      <Tours items={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
