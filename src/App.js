import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    filter: "none",
    results: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  handleChange = event => {
    this.setState({ filter: event });
  };
  render() {
    return (
      <div className="app">
        <Header title="Anime Suggestion App" />
        <Filter
          filterValue={this.state.filter}
          handleChange={this.handleChange}
        />
        <Results results={this.state.results} />
        <Footer />
      </div>
    );
  }
}

export default App;
