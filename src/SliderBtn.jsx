import React from "react";
import "./SliderBtn.css";

function sliderBtn({ i, func, max, direction }) {
  if (direction === "<" && i > 0)
    return (
      <button onClick={func} className="btn slider-button">
        {direction}
      </button>
    );
  else if (direction === ">" && i < max)
    return (
      <button onClick={func} className="btn slider-button">
        {direction}
      </button>
    );
  else
    return <button className="btn slider-button disabled">{direction}</button>;
}

export default sliderBtn;
