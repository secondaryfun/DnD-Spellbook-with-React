import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      resultsIndex: -1,
      count: 10,
      spells: [],
    };
  }

  componentDidMount() {
    this.getPaths();
  }

  getPaths = () => {
    let url = "https://www.dnd5eapi.co/api/spells";
    let results = this.state.results;

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i < this.state.count; i++) {
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
          this.setState({ spells: data });
        });
      })
      .catch((error) => console.log("Error", error));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wizard Spellbook</h1>
        </header>
        <Slider items={this.state.results} />
      </div>
    );
  }
}

export default App;
