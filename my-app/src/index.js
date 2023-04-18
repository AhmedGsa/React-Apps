import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return <>
    <Book/>
    <Book/>
    <Book/>
  </>
};

const Book = () => {
  return (
    <div>
      <Image/>
      <Title/>
      <Author/>
    </div>
  );
};

const Title = () => {
    return (
        <h2>This is the title</h2>
    )
}

const Author = () => {
    return <h3>This is the author</h3>
}

const Image = () => {
    return <img src="" alt="" />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
