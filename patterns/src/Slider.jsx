import React, { Component } from "react";
import SliderBtn from "./SliderBtn";
import "./Slider.css";
import Spellbook from "./Spellbook.jsx";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      bookView: true,
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

  toggleView = () => {
    this.state.bookView
      ? this.setState({ bookView: false })
      : this.setState({ bookView: true });
  };

  render() {
    return (
      <main className="flex-center">
        <div className="btn-box">
          <SliderBtn
            func={this.getLeftItem}
            i={this.state.index}
            max={this.props.items ? this.props.items.length - 1 : 0}
            direction="<"
          />

          <button className="btn" onClick={this.toggleView}>
            Change View
          </button>

          <SliderBtn
            func={this.getRightItem}
            i={this.state.index}
            max={this.props.items ? this.props.items.length - 1 : 0}
            direction=">"
          />
        </div>
        <div className={`spellbook-container ${this.state.bookView}`}>
          <Spellbook
            data={
              this.props.items[this.state.index]
                ? this.props.items[this.state.index]
                : ""
            }
            bookView={this.state.bookView}
          />
        </div>
      </main>
    );
  }
}

export default Slider;
