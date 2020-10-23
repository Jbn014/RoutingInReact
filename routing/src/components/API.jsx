import React, { Component } from "react";
import SingleFilm from "./FilmPage";
import GhibliLogo from "./GhibliLogo.png";
import SinglePerson from "./PeoplePage";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmArr: [],
      peopleArr: [],
      hasLoaded: false,
      peopleClick: false,
      filmClick: false,
    };
  }

  handleFilmClick = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => this.setState({ filmArr: res }))
      .catch((err) => console.log(err));
    this.setState({ hasLoaded: true })
    this.setState({ filmClick: true });
  };
  handlePeopleClick = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((res) => this.setState({ peopleArr: res }))
      .catch((err) => console.log(err));
    this.setState({ hasLoaded: true })
    this.setState({ peopleClick: true })
    ;
  };

  render() {
    if (this.state.hasLoaded === false) {
      return (
        <React.Fragment>
          <img className="text-center" src={GhibliLogo} />
          <br></br>
          <button
            className="text-center"
            onClick={this.handleFilmClick}
            
          >
            Load Films
          </button>
          <br></br>
          <button onClick={this.handlePeopleClick} >
            Load People
          </button>
        </React.Fragment>
      );
    } else if (this.state.filmClick === true) {
      return this.state.filmArr.map((film) => <SingleFilm film={film} />);
    } else if (this.state.peopleClick === true) {
      return this.state.peopleArr.map((person) => (
        <SinglePerson person={person} />
      ));
    }
  }
}

export default App;
