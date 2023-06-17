import { useState } from "react";
import data from './data'

const App = () => {
  const [count, setCount] = useState(1)
  const [generatedText, setGeneratedText] = useState([])
  const handleInputChange = (e) => {
    setCount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setGeneratedText(data.slice(0,count))
  }
  return <div className="section-center">
    <h4>TIRED OF BORING LOREM IPSUM?</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="count">Paragraphs:</label>
      <input type="number" id="count" value={count} min={1} max={8} onChange={handleInputChange}></input>
      <button type="submit" className="btn" >Generate</button>
    </form>
    <div className="lorem-text">
      {generatedText.map((text) => <p>{text}</p>)}
    </div>
  </div>;
};
export default App;
