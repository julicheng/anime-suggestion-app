import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    filter: "none",
    results: []
  };

  animeList = [
    { id: 1, title: "Kimi Ni Todoke", genre: "Romance", rating: 9 },
    { id: 2, title: "Erased", genre: "Thriller", rating: 9 },
    { id: 3, title: "Skip Beat!", genre: "Comedy", rating: 10 },
    { id: 4, title: "Nana", genre: "Drama", rating: 9 },
    { id: 5, title: "Ao Haru Ride", genre: "Romance", rating: 8 },
    { id: 6, title: "Anohana", genre: "Romance", rating: 10 },
    { id: 7, title: "Clannad: After Story", genre: "Romance", rating: 9 },
    { id: 8, title: "Tsuki ga Kirei ", genre: "School", rating: 9 },
    { id: 9, title: "Violet Evergarden", genre: "Drama", rating: 10 },
    { id: 10, title: "Lucky Star", genre: "Slice of Life", rating: 7 },
    { id: 11, title: "Kaichou wa Maid-sama!", genre: "School", rating: 8 },
    { id: 12, title: "Ouran Koukou Host Club ", genre: "School", rating: 9 }
  ];

  handleChange = event => {
    this.setState({ filter: event }, function() {
      this.getResults();
    });
  };

  getResults = () => {
    let filter = this.state.filter;
    let resultList = this.animeList.filter(title => {
      return title.genre.toLowerCase() === filter;
    });
    this.setState({ results: resultList });
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
