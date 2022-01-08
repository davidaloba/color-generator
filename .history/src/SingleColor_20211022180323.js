import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");

  return (
    <article className={"color"} style={{ backgroundColor: `rgb(${bgc})` }}>
      <p className="percent-value">{weight}%</p>
    </article>
  );
};

export default SingleColor;
