import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  // const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      {/* <p className="color-value">{hex}</p> */}
      <p className="color-value">#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
