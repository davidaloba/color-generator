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

  return <h2>color generator project</h2>;
}

export default App;
