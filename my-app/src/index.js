import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    img: "https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg",
    id: 1
  },
  {
    title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    author: "David Grann",
    img: "https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg",
    id: 2
  },
  {
    title:
      "The Montessori Toddler: A Parent's Guide to Raising a Curious and Responsible Human Being",
    author: "Simone Davies",
    img: "https://images-na.ssl-images-amazon.com/images/I/71KxZB7ob4L._AC_UL600_SR600,400_.jpg",
    id: 3
  }
];

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </div>
  );
};

const Book = (props) => {
  const { title, author, img } = props;
  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
