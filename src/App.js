import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      resultsIndex: -1,
      count: 319,
      spells: [],
    };
  }

  componentDidMount() {
    this.getPaths();
  }
  //https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
  //http://joelabrahamsson.com/quickly-mapping-an-array-of-urls-to-responses-with-javascript-asyncawait-and-promiseall/

  getPaths = () => {
    let url = "https://www.dnd5eapi.co/api/spells";
    let results = this.state.results;

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i < this.state.count; i = i + 9) {
          //get random
          results.push(data.results[i]);
        }
        return results;
      })
      .then((results) => {
        let urls = results.map(
          (result) => `https://www.dnd5eapi.co${result.url}`
        );

        Promise.all(
          urls.map((url) => fetch(url).then((result) => result.json()))
        ).then((data) => {
          // console.log(data);
          this.setState({ spells: data });
        });
      })
      .catch((error) => console.log("Error", error));
  };

  render() {
    // console.log(this.state.spells);
    return <Slider items={this.state.spells} />;
  }
}

export default App;
