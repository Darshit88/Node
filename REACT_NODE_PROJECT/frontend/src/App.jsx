import { useState } from "react";
import "./App.css";

function App() {
  const [h1Data, setM1Data] = useState("");
  fetch("http://localhost:3000/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setM1Data(data.msg);
    });

  return (
    <>
      <h1>{h1Data}</h1>
    </>
  );
}

export default App;

