import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, seList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDevault();
    try {
      let colours = new Values(colour).all(10);
    } catch (error) {}
  };

  return (
    <>
      <section className="container">
        <h3>color generatoi</h3>
        <form onClick={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#f15025"
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colours">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
