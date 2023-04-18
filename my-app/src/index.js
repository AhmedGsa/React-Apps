import React from "react";
import ReactDOM from "react-dom/client";

const Component = () => {
  return <>
    <h1 className="hello">This is a component</h1>
    <Card/>
  </>
};

const Card = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
