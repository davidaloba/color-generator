import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, seList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDevault();
    console.log("hello");
  };

  return (
    <>
      <section className="container">
        <h3>color generatoi</h3>
        
      </section>
      <section className="colours">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
