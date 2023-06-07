const Book = (props) => {
  const { title, author, img, getBook, id, bookNumber } = props;
  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {/* <button onClick={() => getBook(id)}>click me</button> */}
      <span className="number">{`#${bookNumber}`}</span>
    </div>
  );
};

export default Book;
