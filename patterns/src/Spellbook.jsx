import React from "react";
import "./Spellbook.css";

function Spellbook(props) {
  let id = props.data.id;
  let castingTime = props.data.casting_time;
  let concentration = props.data.concentration;
  let duration = props.data.duration;
  let index = props.data.index;
  let level = props.data.level;
  let material = props.data.material;
  let name = props.data.name;
  let range = props.data.range;
  let ritual = props.data.ritual;
  let url = props.data.url;
  let bookView = props.bookView;
  console.log(bookView);
  console.log(props);

  return (
    <div className="flex-center">
      <h1 className={bookView ? "hidden" : ""}>Book of Spells</h1>
      <div className={bookView ? "book" : ""}>
        <div className={bookView ? "back" : ""}></div>
        <div className={bookView ? "page6" : ""}>
          <section className={bookView ? "" : "info-box"}>
            <h1>{name}</h1>
            <p>
              <span>{"castingTime".toUpperCase()}: </span> {castingTime}{" "}
            </p>
            <p>
              <span>{"concentration".toUpperCase()}: </span> {concentration}{" "}
            </p>
            <p>
              <span>{"duration".toUpperCase()}: </span> {duration}{" "}
            </p>
            <p>
              <span>{"index".toUpperCase()}: </span> {index}{" "}
            </p>
            <p>
              <span>{"level".toUpperCase()}: </span> {level}{" "}
            </p>
            <p>
              <span>{"material".toUpperCase()}: </span> {material}{" "}
            </p>

            <p>
              <span>{"range".toUpperCase()}: </span> {range}{" "}
            </p>
            <p>
              <span>{"ritual".toUpperCase()}: </span> {ritual}{" "}
            </p>
          </section>
        </div>
        <div className={bookView ? "page5" : ""}></div>
        <div className={bookView ? "page4" : ""}></div>
        <div className={bookView ? "page3" : ""}></div>
        <div className={bookView ? "page2" : ""}></div>
        <div className={bookView ? "page1" : ""}></div>
        <div className={bookView ? "front" : ""}>
          <h1 className={bookView ? "" : "hidden"}>Book of Spells</h1>
        </div>
      </div>
    </div>
  );
}

export default Spellbook;

// Original css design by https://codepen.io/dhanishgajjar/pen/bjaYYo
