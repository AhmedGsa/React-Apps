import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import Book from "./Book";
import "./index.css";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book);
  }
  return (
    <>
      <h1 style={{textAlign: "center"}}>Top Selled books</h1>
      <div className="book-list">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} getBook={getBook} bookNumber={index+1} />
        })}
      </div>
    </>
    
  );
};

// const EventsExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//   }
//   const handleFormSubmit = (e) => {
//     e.preventDefault()
//     alert("form submitted!")
//   }
//   return <div>
//     <form onSubmit={handleFormSubmit}>
//       <h2>This is a form</h2>
//       <input type="text" onChange={handleFormInput}></input>
//       <input type="submit"></input>
//     </form>
//   </div>
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
