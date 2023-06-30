import { useState, useTransition, Suspense, lazy } from "react";
//import SlowComponent from './SlowComponent'
const SlowComponent = lazy(() => import("./SlowComponent"));
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginTop: "2rem",
        }}
      >
        {isPending ? <h4>Loading ...</h4> : items}
      </div>
      {show && (
        <Suspense>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
