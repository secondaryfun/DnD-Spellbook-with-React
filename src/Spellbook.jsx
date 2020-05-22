import React from "react";
import "./Spellbook.css";

function Spellbook(props) {
  let castingTime = props.data.casting_time;
  let concentration = props.data.concentration;
  let duration = props.data.duration;
  let index = props.data.index;
  let level = props.data.level;
  let material = props.data.material;
  let name = props.data.name;
  let range = props.data.range;
  let ritual = props.data.ritual;
  let bookView = props.bookView;
  let openBook = props.openBook;
  let pageRight = props.pageRight;
  let pageLeft = props.pageLeft;

  return (
    <div className="flex-center spellbook-wrapper">
      <h1 className={bookView ? "hidden" : "info-box__header"}>
        Book of Spells
      </h1>
      <div className={bookView ? "book" : ""}>
        <div className={bookView ? "back" : ""} onClick={openBook}></div>
        <div onClick={pageRight} className={bookView ? "page6" : ""}>
          <h1 onClick={openBook} className={bookView ? "" : "info-box__header"}>
            {name}
          </h1>
          <section className={bookView ? "" : "info-box"}>
            <p>
              <span>castingTime: </span> {castingTime}{" "}
            </p>
            <p>
              <span>concentration: </span> {concentration}{" "}
            </p>
            <p>
              <span>duration: </span> {duration}{" "}
            </p>
            <p>
              <span>index: </span> {index}{" "}
            </p>
            <p>
              <span>level: </span> {level}{" "}
            </p>
            <p>
              <span>material: </span> {material}{" "}
            </p>
            <p>
              <span>range: </span> {range}{" "}
            </p>
            <p>
              <span>ritual: </span> {ritual}{" "}
            </p>
            <footer>{props.index}</footer>
          </section>
        </div>
        <div onClick={pageLeft} className={bookView ? "page5" : ""}></div>
        <div onClick={pageRight} className={bookView ? "page4" : ""}></div>
        <div onClick={pageLeft} className={bookView ? "page3" : ""}></div>
        <div onClick={pageRight} className={bookView ? "page2" : ""}></div>
        <div onClick={pageLeft} className={bookView ? "page1" : ""}></div>
        <div className={bookView ? "front" : ""} onClick={openBook}>
          <h1 className={bookView ? "" : "hidden"}>Book of Spells</h1>
        </div>
      </div>
    </div>
  );
}

export default Spellbook;

// Original css design by https://codepen.io/dhanishgajjar/pen/bjaYYo
