import { useState, useEffect } from "react";
import MapContainer from "./MapContainer";


function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const showmap = () => setShow((current) => !current);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 1) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword&counter changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>COUNT UP</button>
      <br />
      <button onClick={showmap}>{show? "Hide" : "Show"}</button>
      {show ? <MapContainer/> : null}
    </div>
  );
}

export default App;
