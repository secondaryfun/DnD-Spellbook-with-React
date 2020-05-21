import React, { Component } from "react";
import SliderBtn from "./SliderBtn";
import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      index: -1,
      items: [],
    };
  }

  getLeftItem = () => {
    this.setState({ index: this.state.index - 1 });
  };

  getRightItem = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    return (
      <main>
        <SliderBtn
          func={this.getLeftItem}
          i={this.state.index}
          max={this.state.items.length - 1}
          direction="<"
        />
        <p className="">{this.state.items[this.state.index]}</p>
        <SliderBtn
          func={this.getRightItem}
          i={this.state.index}
          max={this.state.items.length - 1}
          direction=">"
        />
      </main>
    );
  }
}

export default Slider;
