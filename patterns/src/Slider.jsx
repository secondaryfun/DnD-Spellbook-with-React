import React, { Component } from "react";
import SliderBtn from "./SliderBtn";
import "./Slider.css";
import Spell from "./Spell.jsx";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  getLeftItem = () =>
    this.setState({
      index: this.state.index ? this.state.index - 1 : this.state.index,
    });

  getRightItem = () =>
    this.setState({
      index:
        this.props.items.length > 1 ? this.state.index + 1 : this.state.index,
    });

  render() {
    return (
      <main>
        <SliderBtn
          func={this.getLeftItem}
          i={this.state.index}
          max={this.props.items ? this.props.items.length - 1 : 0}
          direction="<"
        />
        <p className="">
          {this.props.items[this.state.index]
            ? this.props.items[this.state.index].name
            : ""}
        </p>
        <Spell
          data={
            this.props.items[this.state.index]
              ? this.props.items[this.state.index].name
              : ""
          }
        />
        <SliderBtn
          func={this.getRightItem}
          i={this.state.index}
          max={this.props.items ? this.props.items.length - 1 : 0}
          direction=">"
        />
      </main>
    );
  }
}

export default Slider;
