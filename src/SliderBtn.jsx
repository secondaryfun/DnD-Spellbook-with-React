import React from "react";
import "./SliderBtn.css";

function sliderBtn({ i, func, max, direction, bookView }) {
  if (direction === "<" && i > 0)
    return (
      <button
        onClick={func}
        className={bookView ? "hidden" : "btn slider-button sideBtn"}
      >
        {direction}
      </button>
    );
  else if (direction === ">" && i < max)
    return (
      <button
        onClick={func}
        className={bookView ? "hidden" : "btn slider-button sideBtn"}
      >
        {direction}
      </button>
    );
  else
    return (
      <button
        className={bookView ? "hidden" : "btn slider-button disabled sideBtn"}
      >
        {direction}
      </button>
    );
}

export default sliderBtn;
