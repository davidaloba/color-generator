import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [Color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let Colors = new Values(Color).all(10);
      setList(Colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onClick={handleSubmit}>
          <input
            type="text"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((Color, index) => {
          return (
            <SingleColor
              key={index}
              {...Color}
              index={index}
              hexColor={Color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
