import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return <div className="book-list">
    <Book/>
    <Book/>
    <Book/>
  </div>
};

const Book = () => {
  return (
    <div className="book">
      <Image/>
      <Title/>
      <Author/>
    </div>
  );
};

const Title = () => {
    return (
        <h2>The Last Thing He Told Me: A Novel</h2>
    )
}

const Author = () => {
    return <h3>Laura Dave</h3>
}

const Image = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg" alt="The Last Thing He Told Me: A Novel" />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
