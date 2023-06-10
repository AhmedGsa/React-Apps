const ErrorExample = () => {
  let count =0;
  const handleClick = () => {
    count++;
    console.log(count);
  }
  return <div>
    <p>{count}</p>
    <button onClick={handleClick} >clickme</button>
  </div>;
};

export default ErrorExample;
