import { useEffect, useState } from "react";
import "./App.scss";

import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() =>{
    console.log("useEffect is working also when count is changing");
  },[count]);


  return (
    <>
      <div>
        <h1>REACT APP</h1>
        <Title />
        <Title text="Text prop 2" />
        <Title text="Text prop 3" />
        <Button />
        <Button onClick={() => alert("First button")} text="Click me 2" />
        <Button onClick={() => alert("Second button")} text="See more" />
        <Button
          onClick={() => setCount(count +1)}
          text={`Number of clicks: ${count}`}
        />
        <Title text={count}/>
      </div>
    </>
  );
}

export default App;
